import { createRouter, createWebHistory } from "vue-router";
// import AuthLayout from '../layouts/AuthLayout.vue';
// import RootLayout from '../layouts/RootLayout.vue';
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

// const routes = [
//   {
//     path: '/',
//     component: RootLayout,
//     children: [
//       { path: '',name:"home", component: Home },
//       { path: '/saved',name:"saved", component: Saved },
//       { path: '/all-users',name:"all users", component: AllUsers },
//       { path: '/create-post',name:"create post", component: CreatePost },
//       { path: '/update-post/:id',name:"edit post", component: EditPost },
//       { path: '/posts/:id',name:"post details", component: PostDetails },
//       { path: '/profile/:id',name:"profile", component: Profile },
//       { path: '/update-profile/:id',name:"update profile", component: UpdateProfile }
//     ]
//   },
//   {
//     path: '/',
//     component: AuthLayout,
//     children: [
//       { path: '/sign-in', name:"sign in", component: Login },
//       { path: '/sign-up',name:"sign up", component: Register }
//     ]
//   }
// ];

const routes = [
  { path: "", name: "home", component: Home },
  { path: "/saved", name: "saved", component: Saved },
  { path: "/all-users", name: "all users", component: AllUsers },
  { path: "/create-post", name: "create post", component: CreatePost },
  { path: "/update-post/:id", name: "edit post", component: EditPost },
  { path: "/posts/:id", name: "post details", component: PostDetails },
  { path: "/profile/:id", name: "profile", component: Profile },
  { path: "/update-profile/:id", name: "update profile", component: UpdateProfile },
  { path: "/sign-in", name: "sign in", component: Login },
  { path: "/sign-up", name: "sign up", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
