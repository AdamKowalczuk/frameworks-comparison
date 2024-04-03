import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_USER } from "./types";
import { Dispatch } from "redux";

import AuthService from "../../services/authService";
import { IUser } from "../../types";
import UserService from "../../services/userService";

export const register = (userName: string, email: string, password: string) => (dispatch: Dispatch) => {
  return AuthService.register({ userName, email, password }).then(
    (data: any) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: data.user,
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

export const updateUser = (userId: string, userData: IUser) => (dispatch: Dispatch) => {
  return UserService.editUser({ userId: userId, userData }).then(
    (data: any) => {
      dispatch({
        type: SET_USER,
        payload: { user: { imageUrl: data.user.imageUrl, userId: data.user._id, userName: data.user.userName, bio: data.user.bio } },
      });
      return Promise.resolve();
    },
    (error: any) => {
      return Promise.reject();
    }
  );
};
