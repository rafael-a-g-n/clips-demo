import { Injectable } from '@angular/core';
import { Clerk } from '@clerk/clerk-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

type ClerkUser = InstanceType<typeof Clerk>['user'];
type ClerkSession = InstanceType<typeof Clerk>['session'];

@Injectable({ providedIn: 'root' })
export class ClerkService {
  private _clerk: InstanceType<typeof Clerk> | null = null;
  private _loaded = false;

  readonly user$ = new BehaviorSubject<ClerkUser>(null);
  readonly session$ = new BehaviorSubject<ClerkSession>(null);

  async load(): Promise<void> {
    if (this._loaded) return;
    this._clerk = new Clerk(environment.clerkPublishableKey, environment.clerkProxyUrl ? { proxyUrl: environment.clerkProxyUrl } : undefined);
    await this._clerk.load();
    this._loaded = true;

    this.user$.next(this._clerk.user ?? null);
    this.session$.next(this._clerk.session ?? null);

    this._clerk.addListener(({ user, session }: { user?: ClerkUser; session?: ClerkSession }) => {
      this.user$.next(user ?? null);
      this.session$.next(session ?? null);
    });
  }

  get clerk(): InstanceType<typeof Clerk> {
    if (!this._clerk) throw new Error('Clerk not loaded');
    return this._clerk;
  }

  async getToken(): Promise<string | null> {
    return this._clerk?.session?.getToken() ?? null;
  }

  async signIn(email: string, password: string): Promise<void> {
    const clerk = this.clerk;
    const result = await clerk.client!.signIn.create({
      identifier: email,
      password,
    });
    if (result.status === 'complete') {
      await clerk.setActive({ session: result.createdSessionId });
    } else {
      throw new Error('Sign in incomplete: ' + result.status);
    }
  }

  async signUp(
    email: string,
    password: string,
    firstName: string,
  ): Promise<'complete' | 'needs_verification'> {
    const clerk = this.clerk;
    const result = await clerk.client!.signUp.create({
      emailAddress: email,
      password,
      firstName,
    });
    if (result.status === 'complete') {
      await clerk.setActive({ session: result.createdSessionId });
      return 'complete';
    }
    // Email verification required
    await clerk.client!.signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
    return 'needs_verification';
  }

  async verifyEmail(code: string): Promise<void> {
    const clerk = this.clerk;
    const result = await clerk.client!.signUp.attemptEmailAddressVerification({ code });
    if (result.status === 'complete') {
      await clerk.setActive({ session: result.createdSessionId });
    } else {
      throw new Error('Verification incomplete: ' + result.status);
    }
  }

  async signOut(): Promise<void> {
    await this.clerk.signOut();
  }
}
