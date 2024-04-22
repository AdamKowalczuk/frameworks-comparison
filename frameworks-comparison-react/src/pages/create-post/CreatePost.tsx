import React, { useState } from "react";
import "./CreatePost.scss";
import Textarea from "../../components/textarea/Textarea";
import InputText from "../../components/input-text/InputText";
import Button from "../../components/button/Button";
import { ReactComponent as CreatePostIcon } from "../../assets/icons/gallery-add-black.svg";
import { ReactComponent as FileUploadIcon } from "../../assets/icons/file-upload.svg";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/postService";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

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
        navigate("/home");
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

          <div className="add-photo-wrapper" style={{ marginTop: "8px" }}>
            <FileUploadIcon />
            <span>Upload a photo in PNG, JPG or SVG format</span>
            <input type="file" id="upload" onChange={handleFileChange} hidden />
            <label
              htmlFor="upload"
              style={{
                backgroundColor: "white",
                color: "#805AD5",
                border: "1px solid",
                borderColor: "#805AD5",
                padding: "0 1rem",
                height: "40px",
                borderRadius: "0.3rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "16px",
                width: "fit-content",
              }}
            >
              Select from computer
            </label>

            {fileURL && <img src={fileURL} alt="Selected File" />}
          </div>
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
