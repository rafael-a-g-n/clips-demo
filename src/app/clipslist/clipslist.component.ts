import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClipService } from '../services/clip.service';


@Component({
  selector: 'app-clipslist',
  templateUrl: './clipslist.component.html',
  styleUrls: ['./clipslist.component.css']
})
export class ClipslistComponent implements OnInit, OnDestroy {
  constructor(public clipService: ClipService) {
    this.clipService.getClips()
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement
    const { innerHeight } = window

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

    if (bottomOfWindow) {
      this.clipService.getClips()
    }
  }
}
