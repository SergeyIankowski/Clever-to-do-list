import { User } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import sendDayTodo from "../../firebase/sendDayTodo";
import Todo from "../../models/TodoInterface";
import { todosCollectionSlice } from "../reducers/todosCollectionSlice";
import { AppDispatch } from "../store";

const setNewUserTodo =
  (db: Firestore, user: User, todo: Todo) => async (dispatch: AppDispatch, getState: () => any) => {
    dispatch(todosCollectionSlice.actions.setNewTodo(todo));
    const { todosCollection } = getState().todosCollection;
    const currentDayTodos = todosCollection[todo.date];
    await sendDayTodo(db, user, todo, currentDayTodos);
  };

export default setNewUserTodo;
