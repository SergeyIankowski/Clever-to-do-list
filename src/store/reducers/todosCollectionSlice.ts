/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../models/TodoInterface";

type TodosCollection = { [index: string]: Todo[] };

const initialState: TodosCollection = {};

export const todosCollectionSlice = createSlice({
  name: "todosCollection",
  initialState,
  reducers: {
    setNewTodo(state: TodosCollection, action: PayloadAction<Todo>) {
      const isField = Object.prototype.hasOwnProperty.call(state, action.payload.date);
      if (!isField) {
        state[action.payload.date] = [];
      }
      state[action.payload.date].push(action.payload);
    },
    deleteTodo(state: TodosCollection, action: PayloadAction<Todo>) {
      const { id, date } = action.payload;
      const index = state[date].findIndex((item) => item.id === id);
      state[date].splice(index, 1);
    },
    updateTodo(state: TodosCollection, action: PayloadAction<Todo>) {
      const { id, date } = action.payload;
      const index = state[date].findIndex((item) => item.id === id);
      const findedTodo = state[date][index];

      findedTodo.title = action.payload.title;
      findedTodo.description = action.payload.description;
      findedTodo.done = action.payload.done;
    },
  },
});

export default todosCollectionSlice.reducer;
