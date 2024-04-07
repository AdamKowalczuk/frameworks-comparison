import { useState, useEffect } from "react";
import "./Profile.scss";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { IUser } from "../../types";
import { useSelector } from "react-redux";
import UserService from "../../services/userService";

import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";

const Profile = () => {
  const navigate = useNavigate();

  const { id: userId } = useParams();
  const { user } = useSelector((state: any) => state.auth);

  const [activeUser, setActiveUser] = useState<IUser>();

  useEffect(() => {
    if (userId) {
      UserService.getUserById(userId)
        .then((response) => {
          setActiveUser(response.user);
        })
        .catch((error: any) => {
          console.error("Error fetching users:", error);
        });
    }
  }, []);

  const handleEditProfile = () => {
    if (activeUser) {
      navigate(`/update-profile/${activeUser._id}`);
    }
  };

  return (
    <div className="right-container">
      <div className="user-profile">
        <div className="profile-header">
          <img src={activeUser?.imageUrl ? activeUser?.imageUrl : ProfilePlaceholder} alt="profile" className="profile-img" />
          <div className="profile-info">
            <p className="profile-username">{activeUser?.userName}</p>
            <p className="profile-bio">{activeUser?.bio}</p>
          </div>

          {user.userId === userId ? <Button text="Edit Profile" onClick={handleEditProfile} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
