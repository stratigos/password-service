import React from "react";
import PropTypes from "prop-types";

/**
 * Display the current password's strength rating.
 */
const PasswordStrength = (props) => {
  return(
    <div className="password-strength-result">
      <p className={props.rating}>
        {props.rating}
      </p>
    </div>
  );
};

PasswordStrength.defaultProps = {
  rating: ""
};

PasswordStrength.propTypes = {
  rating: PropTypes.string.isRequired
};

export default PasswordStrength;
