import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        checked: false,
        text: action.payload,
        id: uuid(),
      });
    },
    deleteTodo(state, action) {},
    toggleCheck(state, action) {},
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
