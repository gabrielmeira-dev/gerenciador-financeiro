import { Component, computed, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavItems } from './components/sidenav-items/sidenav-items';
import { MobileLayout } from '@core/layout/services/mobile-layout';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, SidenavItems],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

  private readonly mobileLayout = inject(MobileLayout);

  isMobile = this.mobileLayout.isMobile();

  sidenavMode = computed(() => this.isMobile() ? 'over': 'side');
}
