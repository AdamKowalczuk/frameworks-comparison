import React from "react";
import "./AllUsers.scss";
import AllUsersIcon from "../../assets/icons/people-black.svg";

const AllUsers = () => {
  return (
    <div className="right-container">
      <div className="title-wrapper">
        <img src={AllUsersIcon} alt="home" />
        <h4>People</h4>
      </div>
    </div>
  );
};

export default AllUsers;
