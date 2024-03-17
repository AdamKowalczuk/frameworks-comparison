import { ref } from "vue";
import { defineStore } from "pinia";
import AuthService from "@/services/authService";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref(localStorage.getItem("user"));
  const token = ref(localStorage.getItem("token"));
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

  return { user, token, isLoggedIn, login };
});
