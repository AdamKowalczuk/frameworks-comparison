import axios from "axios";
import type { INewUser } from "@/types/index";

const register = ({ userName, email, password}:INewUser) => {
  return axios
    .post(`${process.env.VUE_APP_API_URL}/api/signup`, {
      userName,
      email,
      password,
    })
    .then((response) => {

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    }).catch((error) => {
      throw error;
    });;
};

const login = (email: string, password: string) => {
  return axios
    .post(`${process.env.VUE_APP_API_URL}/api/signin`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
