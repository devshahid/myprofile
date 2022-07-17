import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="nav-link active">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <span className="nav-link-name">My Profile</span>
            </Link>
            <Link to="/skills" className="nav-link ">
              <FontAwesomeIcon className="icon" icon={faSignal} />
              <span className="nav-link-name">My Skills</span>
            </Link>
            <Link to="/" className="nav-link">
              <FontAwesomeIcon className="icon" icon={faClipboardCheck} />
              <span className="nav-link-name">My Projects</span>
            </Link>
            <Link to="/" className="nav-link">
              <FontAwesomeIcon className="icon" icon={faChartColumn} />
              <span className="nav-link-name">My Report</span>
            </Link>
          </div>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Sidebar;
