import { inject, provideAppInitializer } from "@angular/core";
import { of } from "rxjs";
import { AuthTokenStorage } from "../services/auth-token-storage";
import { LoginFacade } from "../facades/login-facade";

export function provideLoggedInUser() {
  return provideAppInitializer(() => {
    const authTokenStorage = inject(AuthTokenStorage);
    if (!authTokenStorage.has()) {
      return of();
    }

    const loginFacade = inject(LoginFacade);
    const token = authTokenStorage.get() as string;

   return loginFacade.refreshToken(token);
  });
}