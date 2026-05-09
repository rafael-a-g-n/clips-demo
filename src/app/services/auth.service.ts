import { Injectable } from '@angular/core';
import { Observable, from, map, delay, switchMap, of, filter } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ClerkService } from './clerk.service';
import { ApiService } from './api.service';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;
  public redirect = false;

  constructor(
    private clerkService: ClerkService,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // Initialize Clerk on service creation
    clerkService.load();

    this.isAuthenticated$ = this.clerkService.session$.pipe(
      map(session => !!session)
    );

    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1500));

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.route.firstChild),
      switchMap(route => route?.data ?? of({ authOnly: false }))
    ).subscribe((data) => {
      this.redirect = data['authOnly'] ?? false;
    });
  }

  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password not provided!');
    }

    await this.clerkService.signUp(
      userData.email,
      userData.password,
      userData.name,
    );

    // Store extra fields (age, phone) in D1 via the Worker
    await this.api.post('/api/users', {
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });
  }

  public async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }

    await this.clerkService.signOut();

    if (this.redirect) {
      this.router.navigate(['/']);
    }
  }
}

