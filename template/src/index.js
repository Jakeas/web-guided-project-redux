import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import "./styles.scss";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Step 1 - Create a Redux store
const store = createStore(reducer);

const App = () => {
  return <h1>Hello World</h1>;
};

// Step 1a - connect the store to our app
render(<App />, document.querySelector("#root"));
