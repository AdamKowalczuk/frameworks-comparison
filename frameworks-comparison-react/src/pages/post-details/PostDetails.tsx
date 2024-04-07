import React, { useEffect, useState } from "react";
import "./PostDetails.scss";
import PostCard from "../../components/post-card/PostCard";
import PostService from "../../services/postService";
import { IPost } from "../../types";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost[]>();
  const [isPostLoading, setIsPostLoading] = useState<boolean>(true);
  const { id: postId } = useParams();

  const handleGetPost = () => {
    if (postId) {
      PostService.getPostById(postId)
        .then((response: any) => {
          setPost(response.post);
          setIsPostLoading(false);
        })
        .catch((error: any) => {
          console.error("Error fetching posts:", error);
        });
    }
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <BackIcon onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
        <h4>Back</h4>
      </div>
      {isPostLoading && !post ? <Loader /> : <PostCard post={post} getPosts={handleGetPost} />}
    </div>
  );
};

export default PostDetails;
