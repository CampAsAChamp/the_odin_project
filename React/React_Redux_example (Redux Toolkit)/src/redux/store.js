import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Create the Redux Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
