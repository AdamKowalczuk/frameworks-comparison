import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";
import { Dispatch } from "redux";

import AuthService from "../../services/authService";

export const register = (userName: string, email: string, password: string) => (dispatch: Dispatch) => {
  return AuthService.register({  userName, email, password }).then(
    (response: any) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: { imageUrl: response.imageUrl, userName: response.userName,  bio:response.bio },
        },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { type: "success", text: "Registration successful" },
      });

      return Promise.resolve();
    },
    (error: any) => {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { type: "error", text: message },
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
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { type: "error", text: message },
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
