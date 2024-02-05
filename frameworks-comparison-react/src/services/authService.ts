import axios from "axios";

const register = (name: string, username: string, email: string, password: string) => {
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
    });
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
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
