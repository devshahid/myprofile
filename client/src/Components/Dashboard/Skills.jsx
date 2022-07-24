import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { faSearch, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Redux/action";

const Skills = () => {
  const state = useSelector((state) => state.UpdateGlobalState);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [trackStatus, setTrackStatus] = React.useState(false);
  const [userSkills, setUserSkills] = useState({
    skills: state.skills,
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    border: "none",
  };
  const handleClose = () => {
    setOpen(false);
    setTrackStatus(!trackStatus);
  };
  const [newSkills, setNewSkills] = useState({
    skillTitle: null,
    ratingStars: 0,
    userid: state.userData.userid,
  });

  const handleAddSkills = () => {
    setOpen(true);
  };

  const handleInputs = (e, value) => {
    if (e.target.name === "skillTitle") {
      setNewSkills({ ...newSkills, [e.target.name]: e.target.value });
    } else {
      setNewSkills({ ...newSkills, [e.target.name]: value });
    }
  };
  const addNewSkills = async () => {
    const response = await axios.post("/addskills", newSkills);
    const data = (await response).data;
    // top100Films.push(newSkills);
    console.log(data);
    setOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect");
      const response = axios.get(`/getSkills/${state.userData.userid}`);
      const data = (await response).data;
      if (Object.entries(data).length !== 0) {
        console.log("fetcheddata", data.loginUser.skills);
        setUserSkills({ ...userSkills, skills: data.loginUser.skills });
        dispatch(actions.updateSkillsArr(data.loginUser.skills));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackStatus]);
  return (
    <>
      <main className="space-toggle">
        <Sidebar />
        <div className="skillsHeader">
          <div className="searchBar">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <Autocomplete
              className="skillAutomcomplete"
              options={state.skills}
              getOptionLabel={(option) => option.skillname}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search for Skills"
                  variant="standard"
                />
              )}
            />
          </div>
          <div className="addSkills">
            <button onClick={handleAddSkills}>
              <FontAwesomeIcon className="searchIcon" icon={faPlus} />
              Add a Skill
            </button>
          </div>
        </div>
        <div className="skillsView">
          {userSkills.skills.map((key, index) => (
            <>
              <div className="skills">
                <h4>{key.skillname}</h4>
                <Rating
                  className="ratingStars"
                  name="size-large"
                  value={key.rating}
                  size="large"
                  disabled
                  // onChange={(event, newValue) => {
                  //   console.log(newValue);
                  //   setValue((value) => ({
                  //     ...value,
                  //     [index]: newValue,
                  //   }));

                  //   console.log(value);
                  // }}
                />
              </div>
            </>
          ))}
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="addSkillsModalBox">
                <div className="titleHeaderSkills">
                  <h4>Add a New Skill</h4>
                  <FontAwesomeIcon
                    onClick={handleClose}
                    className="crossIconAddSkills"
                    icon={faX}
                  />
                </div>
                <div className="addSkillsForm">
                  <div className="addSkillDetails">
                    <label>Skill</label>
                    <input
                      type="text"
                      name="skillTitle"
                      onChange={handleInputs}
                      placeholder="Enter your skill"
                    />
                  </div>
                  <div className="addSkillDetails">
                    <label>How would you rate yourself?</label>
                    <Rating
                      className="ratingStars"
                      name="ratingStars"
                      size="large"
                      onChange={handleInputs}
                    />
                  </div>
                  <button onClick={addNewSkills}>Add a Skill</button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </main>
    </>
  );
};

export default Skills;
