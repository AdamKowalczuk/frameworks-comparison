import React, { useState } from "react";
import "./Profile.scss";
import Button from "../../components/Button/Button";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("posts");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-info">
          <h2>Nazwa Użytkownika</h2>
          <p>Email Użytkownika</p>
          <p>Tu znajduje się opis użytkownika.</p>
        </div>
        <Button text="Edit Profile" />
      </div>

      <div className="profile-tabs">
        <button onClick={() => handleTabChange("posts")} className={selectedTab === "posts" ? "active" : ""}>
          Posts
        </button>
        <button onClick={() => handleTabChange("liked-posts")} className={selectedTab === "liked-posts" ? "active" : ""}>
          Liked Posts
        </button>
      </div>

      <div className="posts-list"></div>
    </div>
  );
};

export default Profile;
