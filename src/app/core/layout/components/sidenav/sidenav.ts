import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavItems } from './components/sidenav-items/sidenav-items';


@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, SidenavItems],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

}
