import React, { useState } from "react";
import "../../css/sidebar.css";
import "../../css/profile.css";
import Sidebar from "./Sidebar";
import { Avatar, Stack } from "@mui/material";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const Profile = () => {
  const state = useSelector((state) => state.UpdateGlobalState);
  console.log(state);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userInfo, setUserInfo] = useState({
    userName:
      state.userData.username !== undefined
        ? state.userData.username
        : "No name",
    contact: state.userData.usercontact,
    aboutme: state.userData.useraboutme,
    userid: state.userData.userid,
  });
  const handleInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const updateDetail = async () => {
    const response = await axios.post("/updatename", {
      userName: userInfo.userName,
      userid: state.userData.userid,
    });
    const data = (await response).data;
    console.log(data);
    setOpen(false);
  };
  const updateInfo = async (e) => {
    e.preventDefault();
    console.log(userInfo);
    const response = await axios.post("/updateUserInfo", userInfo);
    const data = (await response).data;
    console.log(data);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };
  return (
    <>
      <main className="space-toggle">
        <Sidebar />
        <div className="profileSection">
          <div className="profileDetails">
            <div className="imageDisplay">
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#D83A52", width: 100, height: 100 }}>
                  {state.userData.username !== undefined
                    ? state.userData.username
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    : "No Name"
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                </Avatar>
              </Stack>
            </div>
            <div className="nameDisplay">
              <h3>
                {state.userData.username !== undefined
                  ? state.userData.username
                  : "No name"}
              </h3>
              {/* <p>
                {state.userData.usercity !== undefined &&
                state.userData.usercountry !== undefined
                  ? `${state.userData.usercity}, ${state.userData.usercountry}`
                  : "No city, No Country"}
              </p> */}
            </div>
            <div className="editDetails">
              <FontAwesomeIcon icon={faPen} onClick={handleOpen} />
            </div>
          </div>
          <div className="profileForm">
            <form>
              <div className="profileInputBox">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={state.userData.useremail}
                  disabled
                />
              </div>
              <div className="profileInputBox">
                <label>Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={state.userData.usercontact}
                  onChange={handleInput}
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="profileInputBox">
                <label>About Me</label>
                <textarea
                  placeholder="Tell us what about you do"
                  cols="30"
                  rows="10"
                  name="aboutme"
                  value={state.userData.useraboutme}
                  onChange={handleInput}
                />
              </div>
              <button onClick={updateInfo} className="updateDetailsBtn">
                Update Details
              </button>
            </form>
          </div>
        </div>
        <div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style} className="updateNameCityModal">
              <div className="updateNameModal">
                <TextField
                  id="standard-basic"
                  className="updateNameModal"
                  label="Enter your Full Name"
                  variant="standard"
                  value={userInfo.userName}
                  onChange={handleInput}
                />
              </div>
              <Button variant="contained" onClick={updateDetail}>
                Update
              </Button>
            </Box>
          </Modal>
        </div>
      </main>
    </>
  );
};

export default Profile;
