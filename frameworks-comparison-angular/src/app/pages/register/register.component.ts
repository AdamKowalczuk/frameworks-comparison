import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth.actions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private store: Store) {}

  handleSignUp(): void {
    if (this.registerForm.valid) {
      this.loading.next(true);

      const { userName, email, password } = this.registerForm.value;
      try {
        this.store.dispatch(
          new AuthActions.Register({ userName, email, password })
        );
      } catch (error) {
        console.error('Registration failed:', error);
      } finally {
        this.loading.next(false);
      }
    }
  }
}
