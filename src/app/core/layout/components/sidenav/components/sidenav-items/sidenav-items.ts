import { Component, computed, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logout } from './directives/logout';
import { LoggedInUserStore } from '@core/auth/stores/logged-in-user-store';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility';


@Component({
  selector: 'app-sidenav-items',
  imports: [RouterLink, RouterLinkActive, MatListModule, Logout],
  templateUrl: './sidenav-items.html',
  styleUrl: './sidenav-items.scss'
})
export class SidenavItems {
  private readonly loggedInUserStore = inject(LoggedInUserStore);
  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);

  isLoggedIn = computed(() => this.loggedInUserStore.isLoggedIn())
    
 
  links = signal([
    {
      label: 'Home',
      url: '/'
    }
  ]);

  closeSidenav(){
    this.sidenavVisibilityStore.close()
  }

}
