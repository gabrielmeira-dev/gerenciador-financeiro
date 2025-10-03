import { inject, Injectable } from '@angular/core';
import { Auth } from '../services/auth';
import { AuthTokenStorage } from '../services/auth-token-storage';
import { tap } from 'rxjs';
import { LoggedInUserStore } from '../stores/logged-in-user-store';

@Injectable({
  providedIn: 'root',
})
export class LogoutFacade {
  authService = inject(Auth);
  authTokenStorage = inject(AuthTokenStorage);
  loggedInUserStore = inject(LoggedInUserStore);

  logout() {
    return this.authService.logout().pipe(
      tap(() => this.authTokenStorage.remove()),
      tap(() => this.loggedInUserStore.logout())
    );
  }
}
