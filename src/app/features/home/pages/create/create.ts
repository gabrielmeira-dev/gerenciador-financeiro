import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-create',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {

    form = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      value: new FormControl('', {
        validators: [Validators.required]
      }),
    });
}
