import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClerkService } from './clerk.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly base = environment.apiUrl;

  constructor(private http: HttpClient, private clerk: ClerkService) {}

  private async headers(): Promise<HttpHeaders> {
    const token = await this.clerk.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });
  }

  async get<T>(path: string): Promise<T> {
    const headers = await this.headers();
    return firstValueFrom(this.http.get<T>(`${this.base}${path}`, { headers }));
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const headers = await this.headers();
    return firstValueFrom(
      this.http.post<T>(`${this.base}${path}`, body, { headers }),
    );
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    const headers = await this.headers();
    return firstValueFrom(
      this.http.put<T>(`${this.base}${path}`, body, { headers }),
    );
  }

  async delete<T>(path: string): Promise<T> {
    const headers = await this.headers();
    return firstValueFrom(
      this.http.delete<T>(`${this.base}${path}`, { headers }),
    );
  }
}
