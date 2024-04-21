import React, { useEffect, useState } from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-black.svg";
import PostService from "../../services/postService";
import { IPost } from "../../types";
import Search from "../../components/search/Search";
import Loader from "../../components/loader/Loader";
import PostCard from "../../components/post-card/PostCard";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(true);

  const handleSearchPosts = () => {
    setIsPostsLoading(true);
    if (searchQuery.length > 0) {
      PostService.searchPosts(searchQuery)
        .then((response) => {
          setPosts(response.posts);
          setIsPostsLoading(false);
        })
        .catch((error: any) => {
          setPosts([]);
          console.error("Error fetching posts:", error);
        });
    } else {
      handleGetPosts();
    }
  };

  const handleGetPosts = () => {
    PostService.getPosts()
      .then((response: any) => {
        setPosts(response.posts.reverse());
        setIsPostsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    handleGetPosts();
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
                <PostCard post={post} getPosts={handleGetPosts} />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
