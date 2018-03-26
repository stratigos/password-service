import { connect } from "react-redux";
import PasswordStrength from "../components/PasswordStrength";

const mapStateToProps = (state, ownProps) => {
  return { rating: state.rating };
};

/**
 * Bind the state of the password strength rating to the data store.
 */
export const PasswordStrengthContainer = connect(mapStateToProps)(PasswordStrength);

export default PasswordStrengthContainer;
