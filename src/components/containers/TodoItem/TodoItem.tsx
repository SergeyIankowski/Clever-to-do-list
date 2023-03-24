import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FC, useContext } from "react";
import classes from "./todoItem.module.scss";
import Pages from "../../../models/Pages";
import { useAppActionCreators, useAppDispatch } from "../../../hooks/redux";
import FirebaseContext from "../../../models/firebaseContext";
import ContextType from "../../../models/Context.type";
import updateUserTodo from "../../../store/thunks/updateUserTodo";
import deleteUserTodo from "../../../store/thunks/deleteUserTodo";
import TodoItemProps from "./interface";

const ICON_SIZE = 25;
const ICON_COLOR = "#3cb043";

const TodoItem: FC<TodoItemProps> = ({ todo, user }) => {
  const { db } = useContext(FirebaseContext) as ContextType;
  const { changeCurrentTodo } = useAppActionCreators();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { title, done } = todo;

  const checkboxHandler = () => {
    const todoWithReversedStatusDone = { ...todo, done: !done };
    dispatch(updateUserTodo(db, user, todoWithReversedStatusDone));
  };

  const deleteButtonHandler = () => {
    dispatch(deleteUserTodo(db, user, todo));
  };

  return (
    <div className={classes.container}>
      <div className={classes.elementsGroup}>
        <button type="button" className={classes.button} onClick={checkboxHandler}>
          {done ? (
            <ImCheckboxChecked size={ICON_SIZE} color={ICON_COLOR} />
          ) : (
            <ImCheckboxUnchecked size={ICON_SIZE} color={ICON_COLOR} />
          )}
        </button>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div className={classes.elementsGroup}>
        <button
          type="button"
          className={classes.button}
          onClick={() => {
            dispatch(changeCurrentTodo(todo));
            navigate(Pages.todoPage);
          }}
        >
          <AiOutlineEye size={ICON_SIZE} />
        </button>
        <button type="button" className={classes.button} onClick={deleteButtonHandler}>
          <AiFillDelete size={ICON_SIZE} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
