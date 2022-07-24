import React from "react";
import Form from "./Form";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <Form
      inputFields={[
        {
          fieldName: "Email Address",
          icon: faEnvelope,
          type: "email",
          name: "useremail",
        },
        {
          fieldName: "Password",
          icon: faKey,
          type: "password",
          name: "userpass",
        },
        {
          fieldName: "Confirm Password",
          icon: faKey,
          type: "password",
          name: "confirmpass",
        },
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
