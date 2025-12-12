import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Search {

  searchTerm = model.required<string>();
}
