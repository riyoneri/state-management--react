import { createStore } from "redux";

// import {}

const initialStore = { counter: 0, showCounter: true };

const counterReducer = (state = initialStore, action) => {
  if (action.type === "increment") {
    return {
      ...initialStore,
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ...initialStore,
      counter: state.counter + action.value,
    };
  }

  if (action.type === "decrement") {
    return {
      ...initialStore,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...initialStore,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

export default createStore(counterReducer);
