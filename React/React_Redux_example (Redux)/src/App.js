import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction, logInAction } from "./actions";

function App() {
  // Pull out what you want from the store (global state object)
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(incrementAction(1))}>+</button>
      <button onClick={() => dispatch(decrementAction(1))}>-</button>
      <button onClick={() => dispatch(logInAction())}>Log In</button>
      {isLogged ? <p>Secret Info here, only for logged in members</p> : ""}
    </div>
  );
}

export default App;
