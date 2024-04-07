import React, { useEffect } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Saved from "./pages/saved/Saved";
import AllUsers from "./pages/all-users/AllUsers";
import CreatePost from "./pages/create-post/CreatePost";
import PostDetails from "./pages/post-details/PostDetails";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/update-profile/UpdateProfile";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout/AuthLayout";
import RootLayout from "./layouts/root-layout/RootLayout";
import { getToken } from "./utils/authUtils";
import { jwtDecode } from "jwt-decode";
import { logout } from "./redux/actions/auth";

function App() {
  let navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => {
    return state.auth;
  });

  const dispatch: any = useDispatch();

  useEffect(() => {
    const token: any = getToken();
    if (!token) {
      navigate("/sign-in");
    } else {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        dispatch(logout());
      }
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
