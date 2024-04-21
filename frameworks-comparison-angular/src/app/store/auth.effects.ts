import { Inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/authService';
import {
  Login,
  LoginSuccess,
  LoginFail,
  RegisterSuccess,
} from './auth.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    // @Inject(authService) private authService: any
    // private authService: any
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Auth] Login'),
        mergeMap((action: any) =>
          this.authService
            .login(action.payload.email, action.payload.password)
            .pipe(
              map((user: any) => {
                new LoginSuccess({ user });
                this.router.navigate(['/']);
              }),
              catchError(() => of(new LoginFail()))
            )
        )
      ),
    { dispatch: false }
  );
  register$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Auth] Register'),
        mergeMap((action: any) =>
          this.authService
            .register({
              userName: action.payload.userName,
              email: action.payload.email,
              password: action.payload.password,
            })
            .pipe(
              map((user: any) => {
                new RegisterSuccess({ user });
                this.router.navigate(['/']);
              }),
              catchError(() => of(new LoginFail()))
            )
        )
      ),
    { dispatch: false }
  );
}
