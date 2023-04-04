/* eslint-disable no-console */
import { User } from "firebase/auth";
import { doc, Firestore, setDoc } from "firebase/firestore";
import Todo from "../models/TodoInterface";

const sendDayTodo = async (db: Firestore, user: User, todo: Todo, todos: Todo[]) => {
  try {
    await setDoc(doc(db, user.uid, todo.date), {
      arrayData: JSON.stringify(todos),
    });
  } catch (e) {
    console.error(e);
  }
};

export default sendDayTodo;
