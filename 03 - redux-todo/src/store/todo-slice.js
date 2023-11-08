import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        checked: false,
        text: action.payload,
        id: state.length,
      });
    },
    deleteTodo(state, action) {},
    toggleCheck(state, action) {},
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
