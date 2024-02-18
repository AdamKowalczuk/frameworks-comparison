import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Button from "../../components/Button/Button";
import { IPost, IUser } from "../../types";
import { useSelector } from "react-redux";
import UserService from "../../services/userService";
import LikeImg from "../../assets/icons/like.svg";
import PostImg from "../../assets/icons/posts.svg";

import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";

interface PostsListProps {
  posts: IPost[] | undefined;
  option: "posts" | "liked-posts";
}

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<"posts" | "liked-posts">("posts");
  const { user } = useSelector((state: any) => state.auth);
  const [activeUser, setActiveUser] = useState<IUser>();
  const [userPosts, setUserPosts] = useState<IPost[] | undefined>();
  const [userLikedPosts, setUserLikedPosts] = useState<IPost[] | undefined>();

  console.log("🚀 ~ Profile ~ activeUser:", activeUser);

  useEffect(() => {
    UserService.getUserById(user.userId)
      .then((response) => {
        setActiveUser(response.user);
      })
      .catch((error: any) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleTabChange = (tab: "posts" | "liked-posts") => {
    setSelectedTab(tab);
  };
  return (
    <div className="right-container">
      <div className="user-profile">
        <div className="profile-header">
          <img src={ProfilePlaceholder} alt="profile" className="profile-img" />
          <div className="profile-info">
            <p>{activeUser?.name}</p>
            <p>{`@${activeUser?.username}`}</p>
            <p>{activeUser?.bio}</p>
          </div>
          <Button text="Edit Profile" />
        </div>

        <div className="posts-tabs">
          <div onClick={() => handleTabChange("posts")} className={selectedTab === "posts" ? "tab active" : "tab"}>
            <img src={LikeImg} alt="like" />
            <p>Posts</p>
          </div>
          <div onClick={() => handleTabChange("liked-posts")} className={selectedTab === "liked-posts" ? "tab active" : "tab"}>
            <img src={PostImg} alt="post" />
            <p> Liked Posts</p>
          </div>
        </div>
        <PostsList posts={selectedTab === "posts" ? userPosts : userLikedPosts} option={selectedTab} />
      </div>
    </div>
  );
};

const PostsList = ({ posts, option }: PostsListProps) => {
  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return <>{post.caption}</>;
        })
      ) : (
        <p style={{ display: "flex", justifyContent: "center" }}>No {option === "liked-posts" ? "liked " : ""}posts</p>
      )}
    </>
  );
};

export default Profile;
