import Header from "../Header/Header";
import classes from "./todoBoard.module.scss";

const TodoBoard = () => {
  return (
    <div className={classes.todoContainer}>
      <Header />
    </div>
  );
};

export default TodoBoard;
