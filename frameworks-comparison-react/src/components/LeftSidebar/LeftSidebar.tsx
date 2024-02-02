import React from "react";
import "./LeftSidebar.scss";
import Button from "../Button/Button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../constants/index";
import { INavLink } from "../../types";

import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="left-sidebar">
      <div>
        <Link to="/">
          <h4>PostShare</h4>
        </Link>

        <Link to={`/profile/111`}>
          <img src={ProfilePlaceholder} alt="profile" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col">
            <p className="body-bold">Kowal</p>
            <p className="small-regular text-light-3">@AdamKowal</p>
          </div>
        </Link>

        <ul>
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={["left-sidebar-link", `${isActive ? "left-sidebar-link--active" : "left-sidebar-link--inactive"}`].join(" ")}
              >
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
