import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoutFacade } from '../../../auth/facades/logout-facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  logoutFacade = inject(LogoutFacade);
  router = inject(Router);

  logout(){
    this.logoutFacade.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
