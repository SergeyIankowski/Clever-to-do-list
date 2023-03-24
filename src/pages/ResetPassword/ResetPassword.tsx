import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sendPasswordReset } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import Pages from "../../models/Pages";
import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./resetPassword.module.scss";
import ResetPasswordProps from "./interface";

const ResetPassword: FC<ResetPasswordProps> = ({ user }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const notifyMessage = (str: string) => toast(str);
  const clickHandler = async () => {
    sendPasswordReset(email.trim(), notifyMessage);
  };
  useEffect(() => {
    if (user) {
      navigate(Pages.todoBoard);
    }
  }, [user]);
  return (
    <div className={classes.resetPassword}>
      <Wrapper>
        <ToastContainer />
        <div className={classes.resetPasswordContainer}>
          <input
            type="text"
            className={classes.resetPasswordTextBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button className={classes.resetPasswordButton} type="button" onClick={clickHandler}>
            Send link to reset Password
          </button>
          <div className={classes.resetPasswordText}>
            Back to <Link to={Pages.login}>Login</Link> page
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
