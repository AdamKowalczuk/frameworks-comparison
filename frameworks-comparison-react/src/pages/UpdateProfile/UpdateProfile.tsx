import React, { useState, ChangeEvent, useRef } from "react";
import "./UpdateProfile.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as UpdateIcon } from "../../assets/icons/edit.svg";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import Textarea from "../../components/Textarea/Textarea";
import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";
import { updateUser } from "../../redux/actions/auth";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);

  const [userName, setUserName] = useState<string>(user.userName);
  const [bio, setBio] = useState<string>(user.bio);
  const [file, setFile] = useState<any>(null);
  const [fileURL, setFileURL] = useState<string | null>(user.imageUrl);
  const [loading, setLoading] = useState(false);
  const fileInputRef: any = useRef(null);
  const dispatch: any = useDispatch();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleUpdateUser = () => {
    const userData = {
      userName,
      bio,
      file,
    };

    dispatch(updateUser(user.userId, userData))
      .then(() => {
        setLoading(false);
        navigate(`/profile/${user.userId}`);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <UpdateIcon />
        <h4>Edit Profile</h4>
      </div>
      <div className="update-profile-container">
        <div className="profile-photo">
          {fileURL ? (
            <img src={fileURL} alt="profile" className="profile-img" />
          ) : user.imageUrl ? (
            <img src={user.imageUrl} alt="profile" className="profile-img" />
          ) : (
            <img src={ProfilePlaceholder} alt="profile" className="profile-img" />
          )}

          <div className="profile-input-file">
            <input type="file" name="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
            <p className="custom-file-button" onClick={handleButtonClick}>
              Change profile photo
            </p>
          </div>
        </div>

        <InputText label="Username" placeholder="Username" onChange={handleUsernameChange} value={userName} />
        <Textarea label="Bio" onChange={handleBioChange} value={bio} />
        <div className="buttons-section">
          <Button variant="outlined" text="Cancel" onClick={handleCancel} />
          <Button onClick={handleUpdateUser} type="submit">
            {loading ? (
              <div className="loader-wrapper">
                <Loader />
                Loading...
              </div>
            ) : (
              "Update Profile"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
