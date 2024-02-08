import React from "react";
import "./Loader.scss";
import { ReactComponent as LoaderIcon } from "../../assets/icons/loader.svg";

const Loader = () => {
  return (
    <div className="loader">
      <LoaderIcon />
    </div>
  );
};

export default Loader;
