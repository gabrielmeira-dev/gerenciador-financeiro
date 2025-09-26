import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<Storage>('Local Storage', {
    providedIn: 'root',
    factory: () => window.localStorage,
    
})