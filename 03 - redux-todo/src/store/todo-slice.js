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
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete(state, action) {
      const targetTodo = state.find((todo) => todo.id === action.payload);
      targetTodo.checked = !targetTodo.checked;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
