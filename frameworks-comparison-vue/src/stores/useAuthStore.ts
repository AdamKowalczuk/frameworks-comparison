import { defineStore } from "pinia";
import AuthService from "@/services/authService";
import type { IUser } from "@/types/index";
import UserService from "@/services/userService";
const userDataFromLocalStorage = localStorage.getItem("user");
const tokenDataFromLocalStorage = localStorage.getItem("token");

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : null,
    token: tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const res = await AuthService.login(email, password);
        this.user = res.user;
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async register(userName: string, email: string, password: string) {
      try {
        const res = await AuthService.register({ userName, email, password });
        this.user = res.user;
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async updateUser(userId: string, userData: IUser) {
      try {
        const data: any = await UserService.editUser({ userId: userId, userData });
        this.user = {
          imageUrl: data.user.imageUrl,
          userId: data.user._id,
          userName: data.user.userName,
          bio: data.user.bio,
        };
        return Promise.resolve();
      } catch (error) {
        return Promise.reject();
      }
    },

    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.user = null;
    },
  },
});
