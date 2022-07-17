import React from "react";

const SignIn = () => {
  return (
    <div className="SignInOuter">
      <div className="signInBody">
        <h1>Sign In</h1>
        <div className="form">
          <form>
            <div className="inputField">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address here" />
            </div>
            <div className="inputField">
              <label>Password</label>
              <input type="password" placeholder="Enter your password here" />
            </div>
            <div className="forgetPassword">
              <p>Forgot password?</p>
            </div>
            <div className="submitBtn">
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
