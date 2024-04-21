import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth.actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private store: Store) {}

  async handleLogin(): Promise<void> {
    this.loading.next(true);

    try {
      this.store.dispatch(
        new AuthActions.Login({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
      );
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      this.loading.next(false);
    }
  }
}
