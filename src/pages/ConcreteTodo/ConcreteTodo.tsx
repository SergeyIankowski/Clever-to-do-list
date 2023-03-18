import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import Wrapper from "../../components/Wrapper/Wrapper";
import ContextType from "../../models/Context.type";
import FirebaseContext from "../../models/firebaseContext";
import Pages from "../../models/Pages";
import classes from "./concreteTodo.module.scss";

type ConcreteTodoProps = {
  title: string;
  description: string;
  done: boolean;
};

const ConcreteTodo = ({ title, description, done }: ConcreteTodoProps) => {
  const { auth } = useContext(FirebaseContext) as ContextType;
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [titleValue, setTitle] = useState(title);
  const [desc, setDesc] = useState(description);
  const [checkboxDone, setCheckboxDone] = useState(done);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate(Pages.login);
  }, [user, loading]);

  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <button
            type="button"
            className={classes.button}
            onClick={() => navigate(Pages.todoBoard)}
          >
            <BiArrowBack size={30} />
          </button>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={classes.title}
          />
          <button
            className={`${classes.button} ${classes.checkbox}`}
            type="button"
            onClick={() => setCheckboxDone(!checkboxDone)}
          >
            {checkboxDone ? (
              <ImCheckboxChecked size={40} color="#3cb043" />
            ) : (
              <ImCheckboxUnchecked size={40} color="#3cb043" />
            )}
          </button>
        </div>
        <textarea
          className={classes.description}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <div>
          <button type="button" className={classes.statusButton}>
            <AiOutlineCheck /> Complete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ConcreteTodo;
