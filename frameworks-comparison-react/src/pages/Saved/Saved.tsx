import { useEffect, useState } from "react";
import { ReactComponent as SavedIcon } from "../../assets/icons/bookmark-black.svg";
import Loader from "../../components/loader/Loader";
import { IPost } from "../../types";
import PostService from "../../services/postService";
import { useSelector } from "react-redux";
import GridPostList from "../../components/grid-post-list/GridPostList";

const Saved = () => {
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);
  const [savedPosts, setSavedPosts] = useState<IPost[]>([]);

  const { user } = useSelector((state: any) => {
    return state.auth;
  });

  useEffect(() => {
    setIsPostsLoading(true);
    PostService.getLikedPosts(user.userId)
      .then((response) => {
        setSavedPosts(response.likedPosts);
        setIsPostsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <SavedIcon />
        <h4>Saved</h4>
      </div>
      {isPostsLoading && !savedPosts ? <Loader /> : <GridPostList posts={savedPosts} />}
    </div>
  );
};

export default Saved;
