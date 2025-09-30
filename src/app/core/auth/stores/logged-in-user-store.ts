import { computed, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserStore {

    private readonly state = signal<User | null>(null);

    currentUser = computed(() => this.state());

    isLoggedIn = computed(() => this.state() !== null); 

    setUser(user: User){
      this.state.set(user);
    }

    logout(){
      this.state.set(null);
    }
}
