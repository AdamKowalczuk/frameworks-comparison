import React from "react";
import "./LeftSidebar.scss";
import Button from "../Button/Button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../constants/index";
import { INavLink } from "../../types";

const LeftSidebar = () => {
  return (
    <nav className="left-sidebar">
      <div>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            return (
              <li key={link.label}>
                <NavLink to={link.route}>
                  <img src={link.imgURL} alt={link.label} />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button text="Logout"></Button>
    </nav>
  );
};

export default LeftSidebar;
