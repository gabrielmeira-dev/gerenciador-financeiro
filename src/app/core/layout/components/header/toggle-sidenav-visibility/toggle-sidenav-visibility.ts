import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MobileLayout } from '@core/layout/services/mobile-layout';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility';

@Component({
  selector: 'app-toggle-sidenav-visibility',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './toggle-sidenav-visibility.html',
  styleUrl: './toggle-sidenav-visibility.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleSidenavVisibility {

  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);
  private readonly mobileLayout = inject(MobileLayout)
  
  isMobile = this.mobileLayout.isMobile();

  toggleSidenavVisibility(){
    this.sidenavVisibilityStore.toggle();
  }
}
