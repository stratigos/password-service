/******************************************************************************
* Application data store.
*******************************************************************************/
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers"; // reducers/index.js
import passwordStrengthApiMiddleware from "../middlewares/password_strength_api_middleware";

/**
 * Create an array of Middleware instances. These can be modified at runtime.
 */
const middleWares = [
  passwordStrengthApiMiddleware
];

/**
 * Create a data store from the root Reducer and Middlewares.
 */
const store = createStore(
  reducer,
  applyMiddleware(...middleWares)
);

export default store;
