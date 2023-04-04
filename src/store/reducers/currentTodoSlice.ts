/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../models/TodoInterface";

type CurrentTodo = { currentTodo: Todo; isUpdated: boolean };

const initialState: CurrentTodo = {
  currentTodo: {
    id: 0,
    date: "",
    title: "",
    description: "",
    done: false,
  },
  isUpdated: false,
};
export const currentTodoSlice = createSlice({
  name: "currentTodo",
  initialState,
  reducers: {
    changeStatusDone(state) {
      state.currentTodo.done = !state.currentTodo.done;
    },
    writeTitle(state: CurrentTodo, action: PayloadAction<string>) {
      state.currentTodo.title = action.payload;
    },
    writeDescription(state: CurrentTodo, action: PayloadAction<string>) {
      state.currentTodo.description = action.payload;
    },
    changeCurrentTodo(state: CurrentTodo, action: PayloadAction<Todo>) {
      state.currentTodo = action.payload;
      state.isUpdated = true;
    },
    writeIdAndDate(state: CurrentTodo, action: PayloadAction<{ id: number; date: string }>) {
      state.currentTodo.id = action.payload.id;
      state.currentTodo.date = action.payload.date;
    },
    clearCurrentTodo(state) {
      state.currentTodo = initialState.currentTodo;
      state.isUpdated = false;
    },
  },
});

export default currentTodoSlice.reducer;
