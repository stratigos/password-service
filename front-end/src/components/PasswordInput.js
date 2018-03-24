import React from  "react";
import { connect } from "react-redux";
import fetchPasswordStrength from "../actions/fetch_password_strength";

/**
 * Provide a wrapper to the Redux store's `dispatch` method, such that the
 *  input field's value can be passed to an ActionCreator.
 */
let createKeyPressHandler = (dispatch) => {
  let keyPressHandler = (event) => {
    dispatch(fetchPasswordStrength(event.target.value));
  };

  return keyPressHandler;
};

/**
 * Create a password input field, which sends a Redux Action on key press.
 */
export class PasswordInput extends React.Component {

  constructor(props) {
    super(props);
    this.handler = createKeyPressHandler(this.props.dispatch);
  }

  render = () => {
    return(
      <input
        type="password"
        name="password"
        onChange={this.handler}
        className="password-strength-input" />
    );
  }

};

// Redux's `dispatch` is always passed to the component wrapped in `connect`.
export default connect()(PasswordInput);
