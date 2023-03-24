import { FC, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import Pages from "../../models/Pages";
import classes from "./register.module.scss";
import Wrapper from "../../components/view/Wrapper/Wrapper";
import RegisterProps from "./interface";

const Register: FC<RegisterProps> = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const notifyName = () => toast("Please enter your name");
  const notifyRegistratonFails = (str: string) => toast(str);

  const register = () => {
    if (!name) {
      notifyName();
      return;
    }
    registerWithEmailAndPassword(name, email.trim(), password, notifyRegistratonFails);
  };

  useEffect(() => {
    if (user) {
      navigate(Pages.todoBoard);
    }
  }, [user]);
  return (
    <div className={classes.register}>
      <Wrapper>
        <ToastContainer />
        <div className={classes.registerContainer}>
          <input
            type="text"
            className={classes.registerTextBox}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            className={classes.registerTextBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className={classes.registerTextBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className={classes.registerButton} type="submit" onClick={register}>
            Register
          </button>
          <button
            className={classes.registerButton}
            type="button"
            onClick={() => {
              signInWithGoogle(notifyRegistratonFails);
            }}
          >
            Register with Google
          </button>
          <div className={classes.registerText}>
            Have you already account? Go To <Link to={Pages.login}>LogIn</Link> page
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Register;
