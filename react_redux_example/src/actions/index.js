import { INCREMENT, DECREMENT, SIGN_IN } from "../types/constants";

// ACTIONS
export const incrementAction = (incrementNum) => {
  return {
    type: INCREMENT,
    payload: incrementNum,
  };
};

export const decrementAction = (decrementNum) => {
  return {
    type: DECREMENT,
    payload: decrementNum,
  };
};

export const logInAction = () => {
  return {
    type: SIGN_IN,
  };
};
