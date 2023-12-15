import React from "react";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/profile/:id/*" element={<Profile />} />
        <Route path="/update-profile/:id" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
}

export default App;
