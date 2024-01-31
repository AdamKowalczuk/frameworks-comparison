import React from "react";
import "./Explore.scss";
import ExploreIcon from "../../assets/icons/wallpaper-black.svg";

const Explore = () => {
  return (
    <div className="right-container">
      <div className="title-wrapper">
        <img src={ExploreIcon} alt="home" />
        <h4>Explore</h4>
      </div>
    </div>
  );
};

export default Explore;
