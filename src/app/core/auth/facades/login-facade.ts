import { inject, Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials';
import { Auth } from '../services/auth';
import { tap, switchMap, pipe } from 'rxjs';
import { AuthTokenStorage } from '../services/auth-token-storage';
import { LoggedInUserStore } from '../stores/logged-in-user-store';
import { AuthTokenResponse } from '../interfaces/auth-token-response';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  private readonly authService = inject(Auth);
  private readonly authTokenStorage = inject(AuthTokenStorage);
  private readonly loggedInUserStore = inject(LoggedInUserStore);

  login(userCredentials: UserCredentials) {
    return this.authService
      .login(userCredentials)
      .pipe(this.createUserSession());
  }

  refreshToken(token: string) {
    return this.authService.refreshToken(token).pipe(this.createUserSession());
  }

  private createUserSession() {
    return pipe(
      tap((res: AuthTokenResponse) => this.authTokenStorage.set(res.token)),
      switchMap((res) => this.authService.getCurrentUser(res.token)),
      tap((user) => this.loggedInUserStore.setUser(user))
    );
  }
}
