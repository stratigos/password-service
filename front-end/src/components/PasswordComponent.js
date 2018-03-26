import React from "react";
import PasswordInput from "./PasswordInput";
import PasswordStrengthContainer from "../containers/PasswordStrengthContainer";

/**
 * Compose a Redux-bound password input field, and a DOM container which
 *  will display the strength of the password.
 */
const PasswordComponent = (props) => {
  return(
    <div className="password-strength">
      <p className="password-strength-lead">
        Enter a password
      </p>
      <PasswordInput />
      <PasswordStrengthContainer />
    </div>
  );
};

export default PasswordComponent;
