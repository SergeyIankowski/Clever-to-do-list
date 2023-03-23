/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../models/TodoInterface";
import TodosCollectionStore from "../../models/TodosCollectionStore";

const initialState: TodosCollectionStore = { todosCollection: {} };

export const todosCollectionSlice = createSlice({
  name: "todosCollection",
  initialState,
  reducers: {
    setNewTodo(state: TodosCollectionStore, action: PayloadAction<Todo>) {
      const collection = state.todosCollection;
      const isField = Object.prototype.hasOwnProperty.call(collection, action.payload.date);
      if (!isField) {
        collection[action.payload.date] = [];
      }
      collection[action.payload.date].push(action.payload);
    },
    deleteTodo(state: TodosCollectionStore, action: PayloadAction<Todo>) {
      const { id, date } = action.payload;
      const index = state.todosCollection[date].findIndex((item) => item.id === id);
      state.todosCollection[date].splice(index, 1);
    },
    updateTodo(state: TodosCollectionStore, action: PayloadAction<Todo>) {
      const { id, date } = action.payload;
      const index = state.todosCollection[date].findIndex((item) => item.id === id);
      const findedTodo = state.todosCollection[date][index];

      findedTodo.title = action.payload.title;
      findedTodo.description = action.payload.description;
      findedTodo.done = action.payload.done;
    },
    setCollection(state: TodosCollectionStore, action: PayloadAction<TodosCollectionStore>) {
      state.todosCollection = action.payload.todosCollection;
    },
  },
});

export default todosCollectionSlice.reducer;
