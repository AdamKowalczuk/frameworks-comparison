import axios from "axios";
import { INewPost, IUpdatePost } from "../types";
import { getToken } from "../utils/authUtils";

const getPosts = () => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/posts`, {
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

const createPost = (postData: INewPost) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/posts`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const editPostById = (postId: string, postData: IUpdatePost) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .put(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`, postData, {
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

const getPostById = (postId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`, {
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


const searchPosts = (query: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/posts/search?query=${query}`, {
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


const deletePostById = (postId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .delete(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`, {
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


const likePostById = (postId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/posts/${postId}/like`, {}, {
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


const unlikePostById = (postId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/posts/${postId}/unlike`, {}, {
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


const savePostById = (postId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/posts/${postId}/save`, {}, {
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


const unsavePostById = (postId: string) => {
  const token = getToken();
  if (!token) {
    return Promise.reject("Token not found in localStorage");
  }
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/posts/${postId}/unsave`, {}, {
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
  getPosts,
  createPost,
  editPostById,
  getPostById,
  searchPosts,
  deletePostById,
  likePostById,
  unlikePostById,
  savePostById,
  unsavePostById,
};
