import { Component, inject } from '@angular/core';
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
import { AuthTokenStorage } from '../../services/auth-token-storage';
import { LoggedInUserStore } from '../../stores/logged-in-user-store';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  authService = inject(Auth);
  router = inject(Router);
  authTokenStorage = inject(AuthTokenStorage);
  loggedInUserStore = inject(LoggedInUserStore);

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

    this.authService
      .login(payload)
      .pipe(
        tap((res) => this.authTokenStorage.set(res.token)),
        switchMap((res) => this.authService.getCurrentUser(res.token)),
        tap((user) => this.loggedInUserStore.setUser(user))
      )
      .subscribe({
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
