import * as AuthActions from './auth.actions';
import { IUser } from '../../types/index';

const userString = localStorage.getItem('user');
const tokenString = localStorage.getItem('token');
const user = userString ? JSON.parse(userString) : null;
const token = tokenString ? JSON.parse(tokenString) : null;

const initialState = user
  ? { isLoggedIn: true, user, token }
  : { isLoggedIn: false, user: null, token: null };

export interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
  token: string | null;
}

const newState = (state: any, newData: any) => {
  return Object.assign({}, state, newData);
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions.All | any
) {
  switch (action.type) {
    case AuthActions.REGISTER_SUCCESS:
      return newState(state, { isLoggedIn: true, user: action.payload });

    case AuthActions.REGISTER_FAIL:
      return newState(state, { isLoggedIn: false });

    case AuthActions.LOGIN_SUCCESS:
      return newState(state, { isLoggedIn: true, user: action.payload });

    case AuthActions.LOGIN_FAIL:
      return newState(state, { isLoggedIn: false, user: null });

    case AuthActions.LOGOUT:
      return newState(state, { isLoggedIn: false, user: null, token: null });

    case AuthActions.SET_USER:
      return newState(state, { user: action.payload });

    default:
      return state;
  }
}
