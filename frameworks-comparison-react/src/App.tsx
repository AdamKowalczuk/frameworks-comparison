import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Saved from "./pages/Saved/Saved";
import AllUsers from "./pages/AllUsers/AllUsers";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import PostDetails from "./pages/PostDetails/PostDetails";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import RootLayout from "./layouts/RootLayout/RootLayout";
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
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
