import { defineStore } from "pinia";
import AuthService from "@/services/authService";
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
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.user = null;
    },
  },
});
