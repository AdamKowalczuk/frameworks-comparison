import React from "react";
import "./GridPostList.scss";
import { IPost } from "../../types";
import { Link } from "react-router-dom";
import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";

type GridPostListProps = {
  posts: IPost[];
  showUser?: boolean;
};

const GridPostList = ({ posts, showUser = true }: GridPostListProps) => {
  return (
    <ul className="grid-container">
      {posts.map((post: IPost) => (
        <li key={post._id} className="relative min-w-80 h-80">
          <Link to={`/posts/${post._id}`} className="grid-post_link">
            <img src={post.imageUrl} alt="post" className="h-full w-full object-cover" />
          </Link>

          <div className="grid-post_user">
            {showUser && (
              <div className="grid-post_user-wrapper">
                <img src={post.creator.imageUrl || ProfilePlaceholder} alt="creator" className="w-8 h-8 rounded-full" />
                <p className="line-clamp-1">{post.creator.userName}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
