import { ChangeDetectionStrategy ,Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserCredentials } from '../../interfaces/user-credentials';
import { LoginFacade } from '../../facades/login-facade';
import { FullWidth } from "@shared/material/form-field/directives/full-width";
import { MarginBottom } from "@shared/material/form-field/directives/margin-bottom";
import { CustomFormField } from '@shared/material/form-field/directives/custom-form-field';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule, CustomFormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
  authService = inject(Auth);
  router = inject(Router);
  loginFacade = inject(LoginFacade);

  form = new FormGroup({
    user: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  submit() {
    if (this.form.invalid) {
      return;
    }

    const payload: UserCredentials = {
      user: this.form.controls.user.value as string,
      password: this.form.controls.password.value as string,
    };

    this.loginFacade.login(payload).subscribe({
      next: (res) => {
        this.router.navigate(['']);
      },
      error: (response: HttpErrorResponse) => {
        if (response.status === 401) {
          this.form.setErrors({
            wrongCredentials: true,
          });
        }
      },
    });
  }
}
