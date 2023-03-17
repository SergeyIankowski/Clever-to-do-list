import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sendPasswordReset } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import Pages from "../../models/Pages";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./resetPassword.module.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const notifyMessage = (str: string) => toast(str);
  const clickHandler = async () => {
    sendPasswordReset(email.trim(), notifyMessage);
  };

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
          <button
            className={classes.resetPasswordButton}
            type="button"
            onClick={clickHandler}
          >
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
