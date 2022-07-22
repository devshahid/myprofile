import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faSearch, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
const Skills = () => {
  const top100Films = [
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
  const handleAddSkills = () => {
    setOpen(true);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    border: "none",
  };
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                    className="crossIconAddSkills"
                    icon={faXmark}
                  />
                </div>
                <div className="addSkillsForm">
                  <div className="addSkillDetails">
                    <label>Skill</label>
                    <input type="text" placeholder={`Enter your details`} />
                  </div>
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
