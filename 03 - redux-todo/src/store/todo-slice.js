import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const saveTodo = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

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

      saveTodo(state);
    },
    deleteTodo(state, action) {
      const updatedState = state.filter((todo) => todo.id !== action.payload);
      saveTodo(updatedState);
      return updatedState;
    },
    toggleComplete(state, action) {
      const targetTodo = state.find((todo) => todo.id === action.payload);
      targetTodo.checked = !targetTodo.checked;
      saveTodo(state);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
