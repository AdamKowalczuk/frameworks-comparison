import React, { useState } from "react";
import "./Saved.scss";
import { ReactComponent as SavedIcon } from "../../assets/icons/bookmark-black.svg";
import Loader from "../../components/Loader/Loader";
import { IPost } from "../../types";

const Saved = () => {
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);
  const [savedPosts, setSavedPosts] = useState<IPost[]>([]);
  return (
    <div className="right-container">
      <div className="title-wrapper">
        <SavedIcon />
        <h4>Saved</h4>
      </div>
      {isPostsLoading && !savedPosts ? (
        <Loader />
      ) : (
        <div>
          {savedPosts.map((post) => {
            return (
              <>
                <p>{post.caption}</p>
                <img src={post.imageUrl} alt={post.caption} />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Saved;
