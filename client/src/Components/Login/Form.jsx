import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import * as actions from "../../Redux/action";
const Form = (props) => {
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    useremail: "",
    userpass: "",
    confirmpass: "",
    incorrect: false,
  });
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(userDetails, e.target.name);
    if (e.target.name === "Sign In") {
      const response = await axios.post("/login", userDetails);
      const data = (await response).data;
      console.log(data);
      if (data.error === "Invalid credentials") {
        console.log("invalid");
        setUserDetails({ ...userDetails, incorrect: true });
      } else {
        dispatch(actions.updateWebsiteData(data.userData));
        navigate("/profile", { state: { userData: data.userData } });
      }
    } else if (e.target.name === "Sign Up") {
      const response = await axios.post("/register", userDetails);
      const data = (await response).data;
      console.log(data);
      if (data.statusCode === 201) {
        navigate("/");
      }
    }
    //
  };
  const handleInputs = (e) => {
    setUserDetails({ ...userDetails, [e.currentTarget.name]: e.target.value });
  };
  return (
    <div className="SignInOuter">
      <div className="signInBody">
        <h1 className="signInHeading">{props.LabelName}</h1>
        {props.type === "forgotpass" ? (
          <p className="forgetpass_comment">
            No worries, we’ll send you reset instructions.
          </p>
        ) : (
          ""
        )}
        <div className="form">
          <form>
            {Object.keys(props.inputFields).map((key) => (
              <div className="inputbox" key={key}>
                <FontAwesomeIcon icon={props.inputFields[key].icon} />
                <div className="inputField">
                  <label>{props.inputFields[key].fieldName}</label>
                  <input
                    onChange={handleInputs}
                    type={`${props.inputFields[key].type}`}
                    name={`${props.inputFields[key].name}`}
                    placeholder={`Enter your ${props.inputFields[
                      key
                    ].fieldName.toLowerCase()} here`}
                  />
                </div>
              </div>
            ))}
            {props.type === "signin" ? (
              <div className="passwordMessage">
                <p className="wrongPass">
                  {userDetails.incorrect ? "Incorrect credentials entered" : ""}
                </p>
                <Link to="/forgotpassword" className="forgetPass">
                  Forgot password?
                </Link>
              </div>
            ) : (
              ""
            )}
            <div className="signInBtn">
              <button name={props.buttonName} onClick={handleSignIn}>
                {props.buttonName}
              </button>
            </div>
          </form>
        </div>
        {props.type !== "forgotpass" ? (
          <div className="signuptext">
            <p>
              {props.bottomMsg[0]}
              <Link to={props.location}>{props.bottomMsg[1]}</Link>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Form;
