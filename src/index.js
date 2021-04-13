import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { dragonListReducer } from "./reducers/dragonListReducer";

import App from "./App";
import "./styles.css";

// STEP 1 - create a store
const store = createStore(dragonListReducer);

// STEP 1a - Wrap the app in the Provider component and "provide"
// the store to your application through props
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
