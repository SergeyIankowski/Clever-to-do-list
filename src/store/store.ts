import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentTodoSliceReducer from "./reducers/currentTodoSlice";
import todosCollectionReducer from "./reducers/todosCollectionSlice";
import currentDateReducer from "./reducers/currentDateSlice";

const rootReducer = combineReducers({
  currentTodo: currentTodoSliceReducer,
  todosCollection: todosCollectionReducer,
  currentDate: currentDateReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
