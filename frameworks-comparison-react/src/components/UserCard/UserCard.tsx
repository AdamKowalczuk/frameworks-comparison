import React from "react";
import "./UserCard.scss";
import { IUser } from "../../types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";

type UserCardProps = {
  user: IUser;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <>
      <div className="user-item" key={user._id}>
        <Link to={`/profile/${user._id}`} className="user-card">
          <img src={ProfilePlaceholder} alt="profile" />
          <div className="user-info">
            <p className="user-name">{user.name}</p>
            <p className="user-username">@{user.username}</p>
          </div>
          <Button text="See profile" />
        </Link>
      </div>
    </>
  );
};

export default UserCard;
