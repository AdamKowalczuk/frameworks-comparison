import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";
import Saved from "../pages/Saved.vue";
import AllUsers from "../pages/AllUsers.vue";
import CreatePost from "../pages/CreatePost.vue";
import EditPost from "../pages/EditPost.vue";
import PostDetails from "../pages/PostDetails.vue";
import Profile from "../pages/Profile.vue";
import UpdateProfile from "../pages/UpdateProfile.vue";

import AuthLayout from "../layouts/AuthLayout.vue";
import RootLayout from "../layouts/RootLayout.vue";
import { useAuthStore } from "@/stores/useAuthStore";
import { getToken } from "@/utils/authUtils";
import { jwtDecode } from "jwt-decode";

const routes = [
  {
    component: RootLayout,
    path: "/",
    redirect: "/home",
    children: [
      { path: "home", name: "Home", component: Home, meta: { requiresAuth: true } },
      { path: "saved", name: "Saved", component: Saved, meta: { requiresAuth: true } },
      { path: "all-users", name: "All users", component: AllUsers, meta: { requiresAuth: true } },
      { path: "create-post", name: "Create post", component: CreatePost, meta: { requiresAuth: true } },
      { path: "update-post/:id", name: "Edit post", component: EditPost, meta: { requiresAuth: true } },
      { path: "posts/:id", name: "Post details", component: PostDetails, meta: { requiresAuth: true } },
      { path: "profile/:id", name: "Profile", component: Profile, meta: { requiresAuth: true } },
      { path: "update-profile/:id", name: "Update profile", component: UpdateProfile, meta: { requiresAuth: true } },
    ],
  },
  {
    component: AuthLayout,
    path: "/",
    children: [
      { path: "sign-in", name: "Login", component: Login },
      { path: "sign-up", name: "Register", component: Register },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  // base: process.env.VUE_APP_API_URL,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore();
    const token: any = getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        authStore.logout();
      }
      next();
    } else {
      next("/sign-in");
    }
  } else {
    next();
  }
});

export default router;
