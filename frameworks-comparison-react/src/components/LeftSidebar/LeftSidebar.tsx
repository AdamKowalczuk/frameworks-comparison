import React from "react";
import "./LeftSidebar.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../constants/index";
import { INavLink } from "../../types";
import Logout from "../../assets/icons/logout.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";

import ProfilePlaceholder from "../../assets/icons/profile-placeholder.svg";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useSelector((state: any) => state.auth);

  const dispatch: any = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <nav className="left-sidebar">
      <div className="sidebar-wrapper">
        <Link to="/">
          <h4>PostShare</h4>
        </Link>

        <Link to={`/profile/${user.userId}`}>
          <div className="sidebar-profile">
            <img src={user.imageUrl ? user.imageUrl : ProfilePlaceholder} alt="profile" />
            <div className="user-info">
              <p className="username">{user.username}</p>
              <p className="text-secondary">@{user.name}</p>
            </div>
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

      <ul>
        <li className="left-sidebar-link" onClick={handleLogout}>
          <div className="logout-button">
            <img src={Logout} alt="logout" />
            Logout
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default LeftSidebar;
