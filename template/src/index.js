import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./styles.scss";

const initialState = {
  title: "Hello world. Is it working?",
};

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    default:
      return state;
  }
};

// under the hood, inside "createStore"
// reducer(undefined, { type: "@@redux/INITe.1.w.j.t.9" });

// Step 1 - Create a Redux store
const store = createStore(reducer);
console.log(store.getState());

const App = () => {
  return <h1>{}</h1>;
};

// Step 2 - Read data from the Redux Store

// Step 1a - connect the store to our app
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
