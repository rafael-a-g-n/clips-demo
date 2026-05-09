import { Injectable } from '@angular/core';
import IClip from '../models/clip.model';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClipService implements Resolve<IClip | null> {
  pageClips: IClip[] = []
  pendingReq = false
  private lastCreatedAt: string | null = null

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  async createClip(data: Omit<IClip, 'id' | 'createdAt'>): Promise<{ id: string }> {
    return this.api.post<{ id: string }>('/api/clips', data);
  }

  getUserClips(sort$: BehaviorSubject<string>): Observable<IClip[]> {
    return new Observable(observer => {
      const sub = sort$.subscribe(async sort => {
        const dir = sort === '1' ? 'desc' : 'asc';
        try {
          const clips = await this.api.get<IClip[]>(`/api/clips/my?sort=${dir}`);
          observer.next(clips);
        } catch (err) {
          observer.error(err);
        }
      });
      return () => sub.unsubscribe();
    });
  }

  async updateClip(id: string, title: string): Promise<void> {
    await this.api.put(`/api/clips/${id}`, { title });
  }

  async deleteClip(clip: IClip): Promise<void> {
    await this.api.delete(`/api/clips/${clip.id}`);
  }

  async getClips(): Promise<void> {
    if (this.pendingReq) return;
    this.pendingReq = true;

    const params = this.lastCreatedAt
      ? `?cursor=${encodeURIComponent(this.lastCreatedAt)}`
      : '';

    const clips = await this.api.get<IClip[]>(`/api/clips${params}`);

    this.pageClips.push(...clips);
    if (clips.length > 0) {
      this.lastCreatedAt = clips[clips.length - 1].createdAt;
    }

    this.pendingReq = false;
  }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<IClip | null> {
    return from(
      this.api.get<IClip>(`/api/clips/${route.params['id']}`).catch(() => {
        this.router.navigate(['/']);
        return null as unknown as IClip;
      })
    );
  }
}

