import { SIGN_IN } from "../types/constants";

// REDUCER
const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return (state = !state);
    default:
      return state;
  }
};

export default isLoggedReducer;
