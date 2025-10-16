import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav-items',
  imports: [RouterLink, RouterLinkActive, MatListModule],
  templateUrl: './sidenav-items.html',
  styleUrl: './sidenav-items.scss'
})
export class SidenavItems {

  links = signal([
    {
      label: 'Home',
      url: '/'
    }
  ])
}
