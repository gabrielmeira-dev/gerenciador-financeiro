import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Sidenav } from './components/sidenav/sidenav';


@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, MatSidenavModule, MatListModule, Sidenav],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Layout {

 
}
