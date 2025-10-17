import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Sidenav } from './components/sidenav/sidenav';
import { SidenavItems } from './components/sidenav/components/sidenav-items/sidenav-items';


@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, MatSidenavModule, MatListModule, SidenavItems, Sidenav],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

 
}
