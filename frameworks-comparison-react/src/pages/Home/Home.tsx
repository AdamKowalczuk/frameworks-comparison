import React, { useEffect, useState } from "react";
import "./Home.scss";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-black.svg";
import PostService from "../../services/postService";
import { IPost } from "../../types";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);

  const handleSearchPosts = () => {
    setIsPostsLoading(true);
    PostService.searchPosts(searchQuery)
      .then((response) => {
        setPosts(response.posts);
        setIsPostsLoading(false);
      })
      .catch((error: any) => {
        setPosts([]);
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    setIsPostsLoading(true);
    PostService.getPosts()
      .then((response) => {
        setPosts(response.posts);
        setIsPostsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <HomeIcon />
        <h4>Home Page</h4>
      </div>
      <Search placeholder="Search" onSearch={handleSearchPosts} value={searchQuery} onChange={(e: any) => setSearchQuery(e)} />
      {isPostsLoading && !posts ? (
        <Loader />
      ) : (
        <div>
          {posts.map((post, postId) => {
            return (
              <React.Fragment key={postId}>
                <PostCard post={post} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
