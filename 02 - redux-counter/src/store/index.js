import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter++,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter--,
    };
  }

  return state;
};

export default createStore(counterReducer);
