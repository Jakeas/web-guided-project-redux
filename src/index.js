import React from "react";
import ReactDOM from "react-dom";

// STEP 1 - create a store

import App from "./App";
import "./styles.css";

// STEP 1a - Wrap the app in the Provider component and "provide"
// the store to your application through props
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
