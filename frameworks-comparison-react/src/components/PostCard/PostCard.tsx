import "./PostCard.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";
import Button from "../Button/Button";
import PostService from "../../services/postService";

type PostCardProps = {
  post: any;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useSelector((state: any) => {
    return state.auth;
  });
  console.log(post);

  const handleLikePost = () => {
    PostService.likePostById(post._id)
      .then((response) => {})
      .catch((error: any) => {});
  };

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.userId}`}>
            <img src={post.creator?.imageUrl || ProfilePlaceholder} alt="creator" className="w-12 lg-h-12 rounded-full" />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg-body-bold text-light-1">{post.creator.name}</p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg-small-regular ">{post.createdAt}</p>
              <p className="subtle-semibold lg-small-regular">{post.location}</p>
            </div>
          </div>
        </div>
      </div>

      <Link to={`/posts/${post._id}`}>
        <div className="small-medium lg-base-medium py-5">
          <p>{post.caption}</p>

          {post.tags.map((tag: string, index: string) => (
            <span>{`#${tag}`}</span>
          ))}
        </div>

        <img src={post.imageUrl} alt="post" className="post-card_img" />
      </Link>
      <Button onClick={handleLikePost}>Like</Button>
    </div>
  );
};

export default PostCard;
