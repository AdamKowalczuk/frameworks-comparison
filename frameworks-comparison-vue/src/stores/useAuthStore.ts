import { ref } from "vue";
import { defineStore } from "pinia";
import AuthService from "@/services/authService";

export const useAuthStore = defineStore("authStore", () => {
  const userString = localStorage.getItem("user");
  const tokenString = localStorage.getItem("token");

  const user = ref(userString ? JSON.parse(userString) : null);
  const token = ref(tokenString ? JSON.parse(tokenString) : null);
  const isLoggedIn = ref(false);

  function login(email: string, password: string): Promise<void> {
    return AuthService.login(email, password).then(
      (res: any) => {
        user.value = res.user;
        return Promise.resolve();
      },
      (error: any) => {
        return Promise.reject();
      }
    );
  }

  function register(userName: string, email: string, password: string): Promise<void> {
    return AuthService.register({ userName, email, password }).then(
      (res: any) => {
        user.value = res.user;
        return Promise.resolve();
      },
      (error: any) => {
        return Promise.reject();
      }
    );
  }

  function logout(): void {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return { user, token, isLoggedIn, login, register, logout };
});
