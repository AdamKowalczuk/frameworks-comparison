import React from "react";
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
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { user: currentUser } = useSelector((state: any) => state.auth);

  return (
    <div className="App">
      {currentUser ? <LeftSidebar /> : <Navigate to="/sign-in" />}
      <Routes>
        {currentUser ? (
          <>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/all-users" element={<AllUsers />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<EditPost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/profile/:id/*" element={<Profile />} />
            <Route path="/update-profile/:id" element={<UpdateProfile />} />
          </>
        ) : (
          <>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
