import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { currentTodoSlice } from "../store/reducers/currentTodoSlice";
import { todosCollectionSlice } from "../store/reducers/todosCollectionSlice";
import { currentDateSlice } from "../store/reducers/currentDateSlice";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppStore = () => {
  const { currentTodo, isUpdated } = useAppSelector((state) => state.currentTodo);
  const { todosCollection } = useAppSelector((state) => state.todosCollection);
  const { currentDate } = useAppSelector((state) => state.currentDate);
  return { currentTodo, isUpdated, todosCollection, currentDate };
};
export const useAppActionCreators = () => {
  const {
    changeStatusDone,
    writeTitle,
    writeIdAndDate,
    changeCurrentTodo,
    writeDescription,
    clearCurrentTodo,
  } = currentTodoSlice.actions;
  const { setNewTodo, updateTodo, deleteTodo, setCollection } = todosCollectionSlice.actions;
  const { setDate } = currentDateSlice.actions;

  return {
    changeStatusDone,
    writeTitle,
    writeIdAndDate,
    changeCurrentTodo,
    writeDescription,
    clearCurrentTodo,
    setNewTodo,
    updateTodo,
    deleteTodo,
    setCollection,
    setDate,
  };
};
