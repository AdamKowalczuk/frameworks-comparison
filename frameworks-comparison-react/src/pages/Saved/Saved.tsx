import React from "react";
import "./Saved.scss";
import SavedIcon from "../../assets/icons/bookmark-black.svg";

const Saved = () => {
  return (
    <div className="right-container">
      <div className="title-wrapper">
        <img src={SavedIcon} alt="home" />
        <h4>Saved</h4>
      </div>
    </div>
  );
};

export default Saved;
