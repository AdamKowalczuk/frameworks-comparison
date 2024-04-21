import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] RegisterSuccess';
export const REGISTER_FAIL = '[Auth] RegisterFail';
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] LoginSuccess';
export const LOGIN_FAIL = '[Auth] LoginFail';
export const LOGOUT = '[Auth] Logout';
export const SET_USER = '[Auth] SetUser';

export class RegisterSuccess implements Action {
  readonly type = 'REGISTER_SUCCESS';

  constructor(public payload: any) {}
}

export class RegisterFail implements Action {
  readonly type = 'REGISTER_FAIL';
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}
}

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = 'LOGIN_SUCCESS';

  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = 'LOGIN_FAIL';
}

export class Logout implements Action {
  readonly type = 'LOGOUT';
}

export class SetUser implements Action {
  readonly type = 'SET_USER';

  constructor(public payload: any) {}
}

export type All =
  | RegisterSuccess
  | RegisterFail
  | LoginSuccess
  | LoginFail
  | Logout
  | SetUser;
