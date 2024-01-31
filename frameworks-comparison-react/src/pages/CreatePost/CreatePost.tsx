import React, { useState } from "react";
import "./CreatePost.scss";
import Textarea from "../../components/Textarea/Textarea";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import CreatePostIcon from "../../assets/icons/gallery-add-black.svg";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

  const handleCreatePost = () => {};

  const handleCancel = () => {};

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <img src={CreatePostIcon} alt="home" />
        <h4>Create Post</h4>
      </div>
      <div className="create-post">
        <div className="caption-section">
          <Textarea label="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
        </div>

        <div className="image-upload-section">
          <label htmlFor="image-upload">Add Photos</label>
        </div>

        <div className="location-section">
          <InputText label="Add Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="tags-section">
          <InputText label="Add Tags (separate by comma “,”)" value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>

        <div className="buttons-section">
          <Button variant="outlined" text="Cancel" onClick={handleCancel} />
          <Button text="Create Post" onClick={handleCreatePost} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
