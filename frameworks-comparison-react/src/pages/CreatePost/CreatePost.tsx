import React, { useState } from "react";
import "./CreatePost.scss";
import Textarea from "../../components/Textarea/Textarea";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import { ReactComponent as CreatePostIcon } from "../../assets/icons/gallery-add-black.svg";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/postService";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const CreatePost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState<any>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const { userId, imageUrl, userName } = useSelector((state: any) => {
    return state.auth.user;
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleCreatePost = (e: any) => {
    e.preventDefault();

    setLoading(true);

    PostService.createPost({ creator: { userId, imageUrl, userName }, caption, file, location, tags })
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <CreatePostIcon />
        <h4>Create Post</h4>
      </div>

      <form onSubmit={handleCreatePost} className="create-post-form">
        <div className="caption-section">
          <Textarea label="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
        </div>

        <div className="image-upload-section">
          <label htmlFor="image-upload">Add Photos</label>

          <input type="file" name="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>

          {fileURL && <img src={fileURL} alt="Selected File" />}
        </div>

        <div className="location-section">
          <InputText label="Add Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="tags-section">
          <InputText
            label="Add Tags (separate by comma “,”)"
            placeholder="Travel, Art, Sport"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="buttons-section">
          <Button variant="outlined" text="Cancel" onClick={handleCancel} />
          <Button onClick={handleCreatePost} type="submit">
            {loading ? (
              <div className="loader-wrapper">
                <Loader />
                Loading...
              </div>
            ) : (
              "Create Post"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
