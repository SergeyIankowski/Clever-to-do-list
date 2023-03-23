import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import { User } from "firebase/auth";
import { useAppActionCreators, useAppDispatch, useAppStore } from "../../hooks/redux";
import Wrapper from "../../components/Wrapper/Wrapper";
import Pages from "../../models/Pages";
import classes from "./concreteTodo.module.scss";
import FirebaseContext from "../../models/firebaseContext";
import ContextType from "../../models/Context.type";
import setNewUserTodo from "../../store/thunks/setNewUserTodo";
import updateUserTodo from "../../store/thunks/updateUserTodo";

type ConcreteTodoProps = {
  user: User;
};

const BUTTON_ICON_SIZE = 30;
const CHECKBOX_SIZE = 40;

const ConcreteTodo = ({ user }: ConcreteTodoProps) => {
  const { db } = useContext(FirebaseContext) as ContextType;

  const { currentTodo, isUpdated } = useAppStore();
  const { changeStatusDone, writeTitle, writeDescription, clearCurrentTodo } =
    useAppActionCreators();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [titleValue, setTitle] = useState(currentTodo.title);
  const [desc, setDesc] = useState(currentTodo.description);
  const checkboxDone = currentTodo.done;

  const completeButtonHandler = async () => {
    if (!currentTodo.title) {
      toast("Please write title of Todo");
      return;
    }
    if (isUpdated) {
      await dispatch(updateUserTodo(db, user, currentTodo));
    } else {
      await dispatch(setNewUserTodo(db, user, currentTodo));
    }
    dispatch(clearCurrentTodo());
    navigate(Pages.todoBoard);
  };

  const backButtonHandler = () => {
    dispatch(clearCurrentTodo());
    navigate(Pages.todoBoard);
  };

  useEffect(() => {
    if (!user) navigate(Pages.login);
  });

  return (
    <Wrapper>
      <ToastContainer />
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <button type="button" className={classes.button} onClick={backButtonHandler}>
            <BiArrowBack size={BUTTON_ICON_SIZE} />
          </button>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={(e) => dispatch(writeTitle(e.target.value))}
            className={classes.title}
          />
          <button
            className={`${classes.button} ${classes.checkbox}`}
            type="button"
            onClick={() => {
              dispatch(changeStatusDone());
            }}
          >
            {checkboxDone ? (
              <ImCheckboxChecked size={CHECKBOX_SIZE} color="#3cb043" />
            ) : (
              <ImCheckboxUnchecked size={CHECKBOX_SIZE} color="#3cb043" />
            )}
          </button>
        </div>
        <textarea
          className={classes.description}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          onBlur={(e) => dispatch(writeDescription(e.target.value))}
        />
        <div>
          <button type="button" className={classes.statusButton} onClick={completeButtonHandler}>
            <AiOutlineCheck /> Complete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ConcreteTodo;
