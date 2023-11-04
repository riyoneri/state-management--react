import { createStore } from "redux";

import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...initialState,
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ...initialState,
      counter: state.counter + action.value,
    };
  }

  if (action.type === "decrement") {
    return {
      ...initialState,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...initialState,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

export default createStore(counterReducer);
