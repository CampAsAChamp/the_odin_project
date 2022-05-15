import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import allReducers from "./reducers";
// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

/* 
// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

// ACTIONS
const incrementAction = (incrementNum) => {
  return {
    type: INCREMENT,
    payload: incrementNum,
  };
};

const decrementAction = (decrementNum) => {
  return {
    type: DECREMENT,
    payload: decrementNum,
  };
};

// STORE -- GLOBALIZED STATE
// let store = configureStore({})
const allReducers = combineReducers({ counterReducer });
let store = createStore(allReducers);

// Display updates in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(incrementAction(2));
store.dispatch(decrementAction(3));
store.dispatch(decrementAction(4));
 */
const store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
