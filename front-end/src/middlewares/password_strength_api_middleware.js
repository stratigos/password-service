/******************************************************************************
 * Load a strength-rating from the password strength service.
 ******************************************************************************/

import { FETCH_PASSWORD_STRENGTH } from '../constants/action_types';

/**
 * Format JSON structure for POST request body.
 */
let formatPasswordStrengthBody = (content) => {
  return JSON.stringify({ password: content })
};

/**
 * Make request to password service back end, pass results to next Action.
 */
const passwordStrengthApiMiddleware = ({ dispatch }) => next => action => {

  if(action.type != FETCH_PASSWORD_STRENGTH) {
    next(action);
    return;
  }

  const { payload } = action;

  fetch(
    payload.url, {
    body: formatPasswordStrengthBody(payload.content),
    headers: {
      'content-type': 'application/json'
    },
    method: "POST",
    mode: "cors"
  }).then(passwordStrengthResponse => {
    if (passwordStrengthResponse.ok) {
      passwordStrengthResponse.json()
        .then(passwordStrengthResponse  => {
          dispatch({
            type: payload.success,
            payload: {
              rating: passwordStrengthResponse.strength
            }
          });
        });
    }
  })
  .catch((error) => {
    console.log("There was an error with the password service: ", error.message);
  });

};

export default passwordStrengthApiMiddleware;
