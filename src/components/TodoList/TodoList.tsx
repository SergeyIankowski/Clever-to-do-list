import { User } from "firebase/auth";
import Todo from "../../models/TodoInterface";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./todoList.module.scss";

type TodoListProps = {
  todos: Todo[];
  user: User;
};

const TodoList = ({ todos, user }: TodoListProps) => {
  const todosNodes = todos.map((todo) => <TodoItem todo={todo} user={user} />);
  return <section className={classes.container}>{todosNodes}</section>;
};

export default TodoList;
