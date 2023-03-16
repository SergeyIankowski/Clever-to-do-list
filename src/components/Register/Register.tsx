import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { registerWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import ContextType from "../../models/Context.type";
import Pages from "../../models/Pages";
import classes from "./register.module.scss";
import FirebaseContext from "../../models/firebaseContext";

const Register = () => {
  const { auth } = useContext(FirebaseContext) as ContextType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const notifyName = () => toast("Please enter your name");
  const notifyAlreadyExist = () => toast("This user already exist");

  const register = () => {
    if (!name) {
      notifyName();
      return;
    }
    registerWithEmailAndPassword(name, email, password, notifyAlreadyExist);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate(Pages.todoBoard);
    }
  }, [user, loading]);
  return (
    <div className={classes.register}>
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
          placeholder="E-mail Address"
        />
        <button
          className={classes.registerButton}
          type="submit"
          onClick={register}
        >
          Register
        </button>
        <button
          className={classes.registerButton}
          type="button"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div className={classes.registerText}>
          Have you already account? Go To <Link to={Pages.login}>LogIn</Link>{" "}
          page
        </div>
      </div>
    </div>
  );
};

export default Register;
