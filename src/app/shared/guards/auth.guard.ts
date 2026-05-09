import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClerkService } from 'src/app/services/clerk.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private clerkService: ClerkService, private router: Router) {}

  canActivate(): boolean {
    if (this.clerkService.user$.getValue() != null) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
