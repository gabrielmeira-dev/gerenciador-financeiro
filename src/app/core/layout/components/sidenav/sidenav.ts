import { Component, computed, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavItems } from './components/sidenav-items/sidenav-items';
import { MobileLayout } from '@core/layout/services/mobile-layout';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, SidenavItems],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

  private readonly mobileLayout = inject(MobileLayout);
  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore)

  isMobile = this.mobileLayout.isMobile();

  sidenavMode = computed(() => this.isMobile() ? 'over': 'side');

  isSidenavOpened = computed(() => {
    if(!this.isMobile()){
      return true
    }
    return this.sidenavVisibilityStore.isVisible();
  })
}
