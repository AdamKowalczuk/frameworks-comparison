import React, { useEffect, useState } from "react";
import "./Home.scss";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-black.svg";
import PostService from "../../services/postService";
import { IPost } from "../../types";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    PostService.getPosts()
      .then((response) => {
        setPosts(response.posts);
      })
      .catch((error: any) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <HomeIcon />
        <h4>Home Page</h4>
      </div>
      <div>
        {posts.map((post) => {
          return (
            <>
              <p>{post.caption}</p>
              <img src={post.imageUrl} alt={post.caption} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
