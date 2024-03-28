import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import { Dispatch } from "redux";

import AuthService from "../../services/authService";

export const register = (userName: string, email: string, password: string) => (dispatch: Dispatch) => {
  return AuthService.register({ userName, email, password }).then(
    (response: any) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: { imageUrl: response.imageUrl, userName: response.userName, bio: response.bio },
        },
      });
      return Promise.resolve();
    },
    (error: any) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const login = (email: any, password: any) => (dispatch: Dispatch) => {
  return AuthService.login(email, password).then(
    (data: any) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.user },
      });
      return Promise.resolve();
    },
    (error: any) => {
      dispatch({
        type: LOGIN_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch: Dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
