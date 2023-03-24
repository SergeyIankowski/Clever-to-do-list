import { FC, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import Pages from "../../models/Pages";
import classes from "./login.module.scss";
import Wrapper from "../../components/Wrapper/Wrapper";
import LoginProps from "./interface";

const Login: FC<LoginProps> = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notifyMessage = (str: string) => toast(str);

  useEffect(() => {
    if (user) {
      navigate(Pages.todoBoard);
    }
  }, [user]);

  return (
    <div className={classes.login}>
      <Wrapper>
        <ToastContainer />
        <div className={classes.loginContainer}>
          <input
            type="text"
            className={classes.loginTextBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className={classes.loginTextBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className={classes.loginButton}
            type="submit"
            onClick={() => {
              logInWithEmailAndPassword(email.trim(), password.trim(), notifyMessage);
            }}
          >
            Login
          </button>
          <button
            className={classes.loginButton}
            type="button"
            onClick={() => {
              signInWithGoogle(notifyMessage);
            }}
          >
            Login with Google
          </button>
          <div className={classes.loginText}>
            If you're not registered? Go to <Link to={Pages.register}>Registration</Link> page.
          </div>
          <div className={classes.loginText}>
            If you've forgotten your password? <Link to={Pages.reset}>Reset</Link> it.
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
