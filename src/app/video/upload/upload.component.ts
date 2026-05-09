import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { ClipService } from 'src/app/services/clip.service';
import { ApiService } from 'src/app/services/api.service';
import { ClerkService } from 'src/app/services/clerk.service';
import { Router } from '@angular/router';
import { FfmpegService } from 'src/app/services/ffmpeg.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnDestroy {
  isDragOver = false
  file: File | null = null
  nextStep = false
  showAlert = false
  alertColor = 'blue'
  alertMsg = 'Please wait! Your clip is being uploaded.'
  inSubmission = false
  percentage = 0
  showPercentage = false
  screenshots: string[] = []
  selectedScreenshot = ''
  private uploadAborted = false

  title = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3)
    ],
    nonNullable: true
  })

  uploadForm = new FormGroup({ title: this.title })

  constructor(
    private clipsService: ClipService,
    private api: ApiService,
    private clerkService: ClerkService,
    private router: Router,
    public ffmpegService: FfmpegService,
  ) {
    this.ffmpegService.init()
  }

  ngOnDestroy(): void {
    this.uploadAborted = true
  }

  async storeFile($event: Event) {
    if (this.ffmpegService.isRunning) return

    this.isDragOver = false

    this.file = ($event as DragEvent).dataTransfer
      ? ($event as DragEvent).dataTransfer?.files.item(0) ?? null
      : ($event.target as HTMLInputElement).files?.item(0) ?? null

    if (!this.file || this.file.type !== 'video/mp4') return

    this.screenshots = await this.ffmpegService.getScreenshots(this.file)
    this.selectedScreenshot = this.screenshots[0]
    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''))
    this.nextStep = true
  }

  async uploadFile() {
    this.uploadForm.disable()
    this.showAlert = true
    this.alertColor = 'blue'
    this.alertMsg = 'Please wait! Your clip is being uploaded.'
    this.inSubmission = true
    this.showPercentage = true

    const clipId = uuid()
    const clipFileName = `${clipId}.mp4`
    const screenshotFileName = `${clipId}.png`

    const user = this.clerkService.user$.getValue()

    try {
      // 1. Get presigned URLs for clip and screenshot
      const [clipUpload, screenshotUpload] = await Promise.all([
        this.api.post<{ uploadUrl: string; key: string }>('/api/upload', {
          fileName: clipFileName,
          contentType: 'video/mp4',
        }),
        this.api.post<{ uploadUrl: string; key: string }>('/api/upload-screenshot', {
          fileName: screenshotFileName,
        }),
      ])

      const screenshotBlob = await this.ffmpegService.blobFromURL(this.selectedScreenshot)

      // 2. Upload both to R2 via proxy upload (with XHR for clip progress)
      await Promise.all([
        this.uploadWithProgress(clipUpload.uploadUrl, this.file!, 'video/mp4'),
        fetch(screenshotUpload.uploadUrl, {
          method: 'PUT',
          body: screenshotBlob,
          headers: { 'Content-Type': 'image/png' },
        }),
      ])

      if (this.uploadAborted) return

      // 3. Create clip record in D1
      const result = await this.clipsService.createClip({
        userId: user?.id ?? '',
        displayName: user?.firstName ?? user?.username ?? 'Anonymous',
        title: this.title.value,
        fileName: clipFileName,
        url: '',          // Worker derives from R2_PUBLIC_URL
        screenshotUrl: '',
        screenshotFileName,
      })

      this.alertColor = 'green'
      this.alertMsg = 'Success! Your clip is ready to be shared.'
      this.showPercentage = false

      setTimeout(() => {
        this.router.navigate(['clip', result.id])
      }, 1000)

    } catch (error) {
      this.uploadForm.enable()
      this.alertColor = 'red'
      this.alertMsg = 'Upload failed! Please try again.'
      this.inSubmission = true
      this.showPercentage = false
      console.error(error)
    }
  }

  private uploadWithProgress(url: string, file: File, contentType: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('PUT', url)
      xhr.setRequestHeader('Content-Type', contentType)

      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          this.percentage = event.loaded / event.total
        }
      })

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) resolve()
        else reject(new Error(`Upload failed: ${xhr.status}`))
      })
      xhr.addEventListener('error', () => reject(new Error('Upload network error')))
      xhr.send(file)
    })
  }
}

