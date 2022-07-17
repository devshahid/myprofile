import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
const SignIn = () => {
  return (
    <div className="SignInOuter">
      <div className="signInBody">
        <h1 className="signInHeading">Sign In</h1>
        <div className="form">
          <form>
            <div className="inputbox">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="inputField">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address here"
                />
              </div>
            </div>
            <div className="inputbox">
              <FontAwesomeIcon icon={faKey} />

              <div className="inputField">
                <label>Password</label>
                <input type="password" placeholder="Enter your password here" />
              </div>
            </div>

            <div className="passwordMessage">
              <p className="wrongPass">Incorrect password entered</p>
              <a href="www.google.com" className="forgetPass">
                Forgot password?
              </a>
            </div>
            <div className="signInBtn">
              <button>Sign In</button>
            </div>
          </form>
        </div>
        <div className="signuptext">
          <p>
            Don’t have an account yet? <a href="google.com">Sign Up here.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
