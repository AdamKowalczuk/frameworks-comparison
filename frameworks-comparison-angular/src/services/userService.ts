import axios from 'axios';
import { IUser } from '../types';
import { getToken } from '../utils/authUtils';

const getUsers = () => {
  const token = getToken();
  if (!token) {
    return Promise.reject('Token not found in localStorage');
  }
  return axios
    .get(`${process.env['ANGULAR_APP_API_URL']}/api/users`, {
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

const getUserById = (userId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject('Token not found in localStorage');
  }
  return axios
    .get(`${process.env['ANGULAR_APP_API_URL']}/api/users/${userId}`, {
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

interface EditUserData {
  userId: string;
  userData: IUser;
}

const editUser = ({ userId, userData }: EditUserData): Promise<IUser[]> => {
  const token = getToken();
  if (!token) {
    return Promise.reject('Token not found in localStorage');
  }
  return axios
    .put(
      `${process.env['ANGULAR_APP_API_URL']}/api/users/${userId}`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    )
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
  editUser,
};
