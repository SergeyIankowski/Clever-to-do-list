import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import ContextType from "../../models/Context.type";
import Pages from "../../models/Pages";
import classes from "./login.module.scss";
import FirebaseContext from "../../models/firebaseContext";
import Wrapper from "../../components/Wrapper/Wrapper";

const Login = () => {
  const { auth } = useContext(FirebaseContext) as ContextType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const notifyMessage = (str: string) => toast(str);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate(Pages.todoBoard);
    }
  }, [user, loading]);

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
              logInWithEmailAndPassword(
                email.trim(),
                password.trim(),
                notifyMessage,
              );
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
            If you're not registered? Go to{" "}
            <Link to={Pages.register}>Registration</Link> page.
          </div>
          <div className={classes.loginText}>
            If you've forgotten your password?{" "}
            <Link to={Pages.reset}>Reset</Link> it.
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
