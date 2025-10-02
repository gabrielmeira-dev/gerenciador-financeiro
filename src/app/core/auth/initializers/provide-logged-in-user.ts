import { inject, provideAppInitializer } from "@angular/core";
import { Auth } from '../services/auth';
import { tap, switchMap, of } from "rxjs";
import { AuthTokenStorage } from "../services/auth-token-storage";
import { LoggedInUserStore } from "../stores/logged-in-user-store";

export function provideLoggedInUser() {
  return provideAppInitializer(() => {
    const authTokenStorage = inject(AuthTokenStorage);
    if (!authTokenStorage.has()) {
      return of();
    }

    const authService = inject(Auth);
    const loggedInUserStore = inject(LoggedInUserStore);
    const token = authTokenStorage.get() as string;

   return authService.refreshToken(token).pipe(
      tap((res) => authTokenStorage.set(res.token)),
      switchMap((res) => authService.getCurrentUser(res.token)),
      tap((user) => loggedInUserStore.setUser(user))
    );
  });
}