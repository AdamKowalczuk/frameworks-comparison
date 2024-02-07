import React, { useState, useEffect } from "react";
import "./AllUsers.scss";
import { ReactComponent as AllUsersIcon } from "../../assets/icons/people-black.svg";
import UserService from "../../services/userService";
import { IUser } from "../../types";
import UserCard from "../../components/UserCard/UserCard";

const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    UserService.getUsers()
      .then((response) => {
        setUsers(response.users);
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
      <div className="users-list">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
