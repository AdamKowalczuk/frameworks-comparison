import "./PostCard.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";
import PostService from "../../services/postService";
import moment from "moment";
import LikeIcon from "../../assets/icons/like.svg";
import LikedIcon from "../../assets/icons/liked.svg";

type PostCardProps = {
  post: any;
  getPosts: any;
};

const PostCard = ({ post, getPosts }: PostCardProps) => {
  const { user } = useSelector((state: any) => {
    return state.auth;
  });

  const handleLikePost = () => {
    PostService.likePostById(post._id)
      .then((response) => {
        getPosts();
      })
      .catch((error: any) => {});
  };

  const handleUnlikePost = () => {
    PostService.unlikePostById(post._id)
      .then((response) => {
        getPosts();
      })
      .catch((error: any) => {});
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <Link to={`/profile/${post.creator.userId}`}>
          <img src={post.creator?.imageUrl || ProfilePlaceholder} className="post-avatar" alt="creator" />
        </Link>

        <div className="post-details">
          <p className="post-creator">{post.creator.userName}</p>
          <div className="post-date-location">
            <p>{moment(post.createdAt, "YYYYMMDD, h:mm:ss a").calendar()}</p>
            <p>{post.location}</p>
          </div>
        </div>
      </div>

      <div className="post-body">
        <Link to={`/posts/${post._id}`}>
          <p className="post-title">{post.caption}</p>
        </Link>
        <div className="post-tags">
          {post.tags.map((tag: string, index: string) => (
            <span>{`#${tag}`}</span>
          ))}
        </div>

        <img src={post.imageUrl} alt="post" className="post-img" />
        <div className="likes-wrapper">
          {post.likes.includes(user.userId) ? (
            <img src={LikedIcon} alt="like" className="like-icon" onClick={handleUnlikePost} />
          ) : (
            <img src={LikeIcon} alt="like" className="like-icon" onClick={handleLikePost} />
          )}

          <span>{post.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
