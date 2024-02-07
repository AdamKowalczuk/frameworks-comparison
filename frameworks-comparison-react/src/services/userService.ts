import axios from "axios";
import { IUser } from "../types";
import { getToken } from "../utils/authUtils";

const getUsers = () => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const getUserById = (userId: string): Promise<IUser[]> => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {


      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const editUserById = (userId: string, userData: IUser): Promise<IUser[]> => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .put(`/api/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default {
  getUsers,
  getUserById,
  editUserById,
};
