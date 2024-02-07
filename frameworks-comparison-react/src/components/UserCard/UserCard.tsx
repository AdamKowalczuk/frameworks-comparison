import React from "react";
import "./UserCard.scss";
import { IUser } from "../../types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

type UserCardProps = {
  user: IUser;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <>
      <div className="user-item" key={user._id}>
        <Link to={`/profile/${user._id}`} className="user-card">
          <img src={user.imageUrl} alt="creator" />
          <div className="user-info">
            <p className="user-name">{user.name}</p>
            <p className="user-username">@{user.username}</p>
          </div>
          <Button text="Follow" />
        </Link>
      </div>
    </>
  );
};

export default UserCard;
