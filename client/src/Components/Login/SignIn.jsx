import React from "react";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
const SignIn = () => {
  return (
    <Form
      inputFields={[
        { fieldName: "Email Address", icon: faEnvelope },
        { fieldName: "Password", icon: faKey },
      ]}
      LabelName="Sign In"
      buttonName="Sign In"
      type="signin"
      bottomMsg={["Don’t have an account yet?", "Sign Up here."]}
      location="/register"
    />
  );
};

export default SignIn;
