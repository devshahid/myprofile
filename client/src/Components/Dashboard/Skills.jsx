import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faSearch, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const Skills = () => {
  let top100Films = [
    { label: "Modern CSS" },
    { label: "Static Site Generators" },
    { label: "Version Control" },
    { label: "Mobile Applications" },
    { label: "Web Security" },
    { label: "Build Tools" },
    { label: "Server Side Rendering" },
    { label: "Task Runners" },
    { label: "Web Assembly" },
    { label: "Module Bundlers" },
  ];
  const [value, setValue] = useState([0, 0, 2, 2, 3]);
  const [open, setOpen] = React.useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    border: "none",
  };
  const handleClose = () => setOpen(false);
  const [newSkills, setNewSkills] = useState({
    skillTitle: null,
    ratingStars: null,
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
  const addNewSkills = () => {
    top100Films.push(newSkills);
    console.log(top100Films);
    setOpen(false);
  };
  return (
    <>
      <main className="space-toggle">
        <Sidebar />
        <div className="skillsHeader">
          <div className="searchBar">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <Autocomplete
              className="skillAutomcomplete"
              options={top100Films}
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
          {top100Films.map((key, index) => (
            <>
              <div className="skills">
                <h4>{key.label}</h4>
                <Rating
                  name="size-large"
                  value={value[index]}
                  size="large"
                  onChange={(event, newValue) => {
                    console.log(newValue);
                    setValue((value) => ({
                      ...value,
                      [index]: newValue,
                    }));

                    console.log(value);
                  }}
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
