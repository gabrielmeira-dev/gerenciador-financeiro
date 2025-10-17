import { Component, computed, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoggedInUserStore } from '../../../auth/stores/logged-in-user-store';
import { Logout } from './directives/logout';

@Component({
  selector: 'app-sidenav-items',
  imports: [RouterLink, RouterLinkActive, MatListModule, Logout],
  templateUrl: './sidenav-items.html',
  styleUrl: './sidenav-items.scss'
})
export class SidenavItems {
  private readonly loggedInUserStore = inject(LoggedInUserStore);

  isLoggedIn = computed(() => this.loggedInUserStore.isLoggedIn())
    
 
  links = signal([
    {
      label: 'Home',
      url: '/'
    }
  ]);

}
