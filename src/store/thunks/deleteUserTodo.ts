import { User } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import sendDayTodo from "../../firebase/sendDayTodo";
import Todo from "../../models/TodoInterface";
import { todosCollectionSlice } from "../reducers/todosCollectionSlice";
import { AppDispatch } from "../store";

const deleteUserTodo =
  (db: Firestore, user: User, todo: Todo) => async (dispatch: AppDispatch, getState: () => any) => {
    dispatch(todosCollectionSlice.actions.deleteTodo(todo));
    const { todosCollection } = getState().todosCollection;
    const currentDayTodos = todosCollection[todo.date];
    await sendDayTodo(db, user, todo, currentDayTodos);
  };

export default deleteUserTodo;
