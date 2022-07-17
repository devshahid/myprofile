import React from "react";
import Form from "./Form";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <Form
      inputFields={[
        { fieldName: "Email Address", icon: faEnvelope },
        { fieldName: "Password", icon: faKey },
        { fieldName: "Confirm Password", icon: faKey },
      ]}
      LabelName="Sign Up"
      buttonName="Sign Up"
      type="register"
      bottomMsg={["Already have an account?", "Sign In here."]}
      location="/"
    />
  );
};

export default Register;
