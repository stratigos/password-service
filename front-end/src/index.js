import React from "react";
import ReactDOM from "react-dom";
// Load global styles.
import "./index.css";
// Load data store from Redux.
import store from "./stores/store";
// `Provider` is Redux binding to React.
import { Provider } from "react-redux";
// React Component for application root node.
import App from "./App";
// Utilize a `create-react-app` library feature for live updates.
import registerServiceWorker from "./registerServiceWorker";

/**
 * Render application to the DOM.
 * The data store is passed as a prop of the wrapping `Provider` Component,
 *  which makes the store available throughout the Component tree.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
