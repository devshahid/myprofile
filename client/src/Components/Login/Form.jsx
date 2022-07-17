import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Form = (props) => {
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
                    type="email"
                    placeholder={`Enter your ${props.inputFields[
                      key
                    ].fieldName.toLowerCase()} here`}
                  />
                </div>
              </div>
            ))}
            {props.type === "signin" ? (
              <div className="passwordMessage">
                <p className="wrongPass">Incorrect password entered</p>
                <Link to="/forgotpassword" className="forgetPass">
                  Forgot password?
                </Link>
              </div>
            ) : (
              ""
            )}
            <div className="signInBtn">
              <button>{props.buttonName}</button>
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
