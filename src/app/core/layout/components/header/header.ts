import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileLayout } from '@core/layout/services/mobile-layout';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);
  private readonly mobileLayout = inject(MobileLayout)
  
  isMobile = this.mobileLayout.isMobile();

  toggleSidenavVisibility(){
    this.sidenavVisibilityStore.toggle();
  }
}
