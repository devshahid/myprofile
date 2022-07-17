import React from "react";
import "../../css/sidebar.css";
import "../../css/profile.css";
import Sidebar from "./Sidebar";
import { Avatar, Stack } from "@mui/material";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Skills = () => {
  return (
    <>
      <main className="space-toggle">
        <Sidebar />
        <div className="profileSection">
          <div className="profileDetails">
            <div className="imageDisplay">
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#D83A52", width: 100, height: 100 }}>
                  SQ
                </Avatar>
              </Stack>
            </div>
            <div className="nameDisplay">
              <h3>John Dough</h3>
              <p>Mumbai, India</p>
            </div>
            <div className="editDetails">
              <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
          <div className="profileForm">
            <form>
              <div className="profileInputBox">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="profileInputBox">
                <label>Contact</label>
                <input type="text" placeholder="Enter your contact number" />
              </div>
              <div className="profileInputBox">
                <label>About Me</label>
                <textarea
                  placeholder="Tell us what about you do"
                  cols="30"
                  rows="10"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
