import React, { useState, useEffect } from "react";
import "./AllUsers.scss";
import { ReactComponent as AllUsersIcon } from "../../assets/icons/people-black.svg";
import UserService from "../../services/userService";
import { IUser } from "../../types";
import UserCard from "../../components/UserCard/UserCard";
import Loader from "../../components/Loader/Loader";

const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsUsersLoading(true);
    UserService.getUsers()
      .then((response) => {
        setUsers(response.users);
        setIsUsersLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="right-container">
      <div className="title-wrapper">
        <AllUsersIcon />
        <h4>Users</h4>
      </div>
      {isUsersLoading && !users ? (
        <Loader />
      ) : (
        <div className="users-list">
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
