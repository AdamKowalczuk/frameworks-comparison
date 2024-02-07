import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Saved from "./pages/Saved/Saved";
import AllUsers from "./pages/AllUsers/AllUsers";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import PostDetails from "./pages/PostDetails/PostDetails";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout/AuthLayout";
import RootLayout from "./pages/RootLayout/RootLayout";
import { getToken } from "./utils/authUtils";

function App() {
  let navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => {
    return state.auth;
  });

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/sign-in");
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
          <Route path="/explore" element={<Explore />} />
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
