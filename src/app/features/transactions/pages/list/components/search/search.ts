import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {

}
