import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToggleSidenavVisibility } from './toggle-sidenav-visibility/toggle-sidenav-visibility';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, ToggleSidenavVisibility],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  
}
