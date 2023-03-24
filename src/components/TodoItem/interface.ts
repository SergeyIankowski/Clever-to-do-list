import { User } from "firebase/auth";
import Todo from "../../models/TodoInterface";

interface TodoItemProps {
  todo: Todo;
  user: User;
}

export default TodoItemProps;
