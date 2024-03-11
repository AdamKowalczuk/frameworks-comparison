import { defineStore } from 'pinia';
import AuthService from '@/services/authService';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    message: null,
  }),
  actions: {
    async register(userName: string, email: string, password: string) {
      try {
        const response = await AuthService.register({ userName, email, password });
        this.setUser(response.imageUrl, response.userName, response.bio);
        this.setMessage({ type: 'success', text: 'Registration successful' });
        return Promise.resolve();
      } catch (error:any) {
        const message = error.response?.data?.message || error.message || error.toString();
        this.setError(message);
        return Promise.reject();
      }
    },
    async login(email: string, password: string) {
      try {
        const data = await AuthService.login(email, password);
        this.setUser(data.user);
        return Promise.resolve();
      } catch (error:any) {
        const message = error.response?.data?.message || error.message || error.toString();
        this.setError(message);
        return Promise.reject();
      }
    },
    logout() {
      AuthService.logout();
      this.$patch({ user: null });
    },
    setUser(imageUrl: string, userName: string, bio: string) {
      this.$patch({ user: { imageUrl, userName, bio } });
    },
    setMessage(message: { type: string, text: string }) {
      this.$patch({ message });
    },
    setError(message: string) {
      this.setMessage({ type: 'error', text: message });
    },
  },
});
