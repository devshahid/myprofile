import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
const Skills = () => {
  const top100Films = [
    { label: "Modern CSS" },
    { label: "Static Site Generators" },
    { label: "Version Control" },
  ];
  const [value, setValue] = useState([0, 0, 2, 2, 3]);
  return (
    <>
      <main className="space-toggle">
        <Sidebar />
        <div className="skillsHeader">
          <div className="searchBar">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            {/* <input type="text" placeholder="Search for Skills" /> */}
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
            <button>
              <FontAwesomeIcon className="searchIcon" icon={faPlus} />
              Add a Skill
            </button>
          </div>
        </div>
        <div className="skillsView">
          {top100Films.map((key) => (
            <p>{top100Films[key]}</p>
          ))}
          {/* <div className="skills">
            <h4>Modern CSS</h4>
            <Rating
              name="size-large"
              value={value[0]}
              size="large"
              onChange={(event, newValue) => {
                console.log(newValue);
                setValue((value) => ({
                  ...value,
                  [0]: newValue,
                }));

                console.log(value);
              }}
            />
          </div>
          <div className="skills">
            <h4>Static Site Generators</h4>
            <Rating
              name="size-large"
              value={value[1]}
              size="large"
              onChange={(event, newValue) => {
                setValue((value) => ({
                  ...value,
                  [1]: newValue,
                }));
              }}
            />
          </div>
          <div className="skills">
            <h4>Version Control</h4>
            <Rating
              name="size-large"
              value={value[2]}
              size="large"
              onChange={(event, newValue) => {
                setValue((value) => ({
                  ...value,
                  [2]: newValue,
                }));
              }}
            />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Skills;
