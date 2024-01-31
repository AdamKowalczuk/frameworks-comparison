import React from "react";
import "./Home.scss";
import HomeIcon from "../../assets/icons/home-black.svg";

const Home = () => {
  return (
    <div className="right-container">
      <div className="title-wrapper">
        <img src={HomeIcon} alt="home" />
        <h4>Home Page</h4>
      </div>
    </div>
  );
};

export default Home;
