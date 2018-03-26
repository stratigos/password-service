/******************************************************************************
* Handle reducers specific to updating content of application state.
******************************************************************************/
import { combineReducers } from 'redux';
import passwordStrengthReducer from './password_strength_reducer';

/**
 * Main Reducer. Keys represent sections of application state.
 */
export default combineReducers({
  rating: passwordStrengthReducer
});
