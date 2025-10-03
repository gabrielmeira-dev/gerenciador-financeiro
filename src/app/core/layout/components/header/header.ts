import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoutFacade } from '../../../auth/facades/logout-facade';
import { Router } from '@angular/router';
import { LoggedInUserStore } from '../../../auth/stores/logged-in-user-store';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  private readonly logoutFacade = inject(LogoutFacade);
  private readonly router = inject(Router);
  private readonly loggedInUserStore = inject(LoggedInUserStore);

  isLoggedIn = computed(() => this.loggedInUserStore.isLoggedIn())
    
  logout(){
    this.logoutFacade.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
