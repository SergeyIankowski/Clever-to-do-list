import { FC } from "react";
import TodoItem from "../../containers/TodoItem/TodoItem";
import TodoListProps from "./interface";
import classes from "./todoList.module.scss";

const TodoList: FC<TodoListProps> = ({ todos, user }) => {
  const todosNodes = todos.map((todo) => <TodoItem todo={todo} user={user} />);
  return <section className={classes.container}>{todosNodes}</section>;
};

export default TodoList;
