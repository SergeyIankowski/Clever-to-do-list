import Header from "../../components/Header/Header";
import TodoContainer from "../../containers/TodoContainer/TodoContainer";
import classes from "./todoBoard.module.scss";

const TodoBoard = () => {
  return (
    <div className={classes.todoContainer}>
      <Header />
      <TodoContainer />
    </div>
  );
};

export default TodoBoard;
