import { User } from "firebase/auth";
import Todo from "../../../models/TodoInterface";

interface TodoListProps {
  todos: Todo[];
  user: User;
}

export default TodoListProps;
