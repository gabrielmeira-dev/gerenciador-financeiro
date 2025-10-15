import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, MatSidenavModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
