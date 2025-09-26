import { inject, Injectable } from '@angular/core';
import { localStorageToken } from '../tokens/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenStorage {
  private readonly key: string = 'auth-token';

  localStroageToken = inject(localStorageToken)

  set(token: string){
    this.localStroageToken.setItem(this.key, token)
  }
}
