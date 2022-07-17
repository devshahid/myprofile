import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
const ForgotPassword = () => {
  return (
    <Form
      inputFields={[{ fieldName: "Email Address", icon: faEnvelope }]}
      LabelName="Forgot Password"
      buttonName="Send"
      type="forgotpass"
    />
  );
};

export default ForgotPassword;
