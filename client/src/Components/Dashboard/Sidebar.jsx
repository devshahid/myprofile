import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/sidebar.css";
import "../../css/profile.css";
import {
  faUser,
  faSignal,
  faChartColumn,
  faClipboardCheck,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <main className="space-toggle">
      <div className="sidebar show">
        <nav className="nav">
          <div className="nav-list">
            <NavLink
              to="/profile"
              activeClassName="active"
              className="nav-link"
            >
              <FontAwesomeIcon className="icon" icon={faUser} />
              <span className="nav-link-name">My Profile</span>
            </NavLink>
            <NavLink
              to="/skills"
              activeClassName="active"
              className="nav-link "
            >
              <FontAwesomeIcon className="icon" icon={faSignal} />
              <span className="nav-link-name">My Skills</span>
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="active"
              className="nav-link"
            >
              <FontAwesomeIcon className="icon" icon={faClipboardCheck} />
              <span className="nav-link-name">My Projects</span>
            </NavLink>
            <NavLink
              to="/reports"
              activeClassName="active"
              className="nav-link"
            >
              <FontAwesomeIcon className="icon" icon={faChartColumn} />
              <span className="nav-link-name">My Report</span>
            </NavLink>
          </div>
          <NavLink to="/" className="nav-link">
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            <span className="nav-link-name">Logout</span>
          </NavLink>
        </nav>
      </div>
    </main>
  );
};

export default Sidebar;
