import { HttpInterceptorFn } from '@angular/common/http';
import { LoggedInUserStore } from '../stores/logged-in-user-store';
import { inject } from '@angular/core';
import { AuthTokenStorage } from '../services/auth-token-storage';

export const setAuthTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const loggedInUserStore = inject(LoggedInUserStore);
  
  if(!loggedInUserStore.isLoggedIn()){
    return next(req);
  }

   const authTokenStorage = inject(AuthTokenStorage);
   
   const token = authTokenStorage.get();

  const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`  
      }
   })

  return next(newReq);
};
