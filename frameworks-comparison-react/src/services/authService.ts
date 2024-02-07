import axios from "axios";
import { INewUser } from "../types";

const register = ({name, username, email, password}:INewUser) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/signup`, {
      name,
      username,
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            userId: response.data.userId,
            token: response.data.token,
          })
        );
      }

      return response.data;
    }).catch((error) => {
      throw error;
    });;
};

const login = (email: string, password: string) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/signin`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }).catch((error) => {
      throw error;
    });;

};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
