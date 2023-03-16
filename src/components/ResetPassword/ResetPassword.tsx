import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { sendPasswordReset } from "../../firebase";
import ContextType from "../../models/Context.type";
import FirebaseContext from "../../models/firebaseContext";
import Pages from "../../models/Pages";
import classes from "./resetPassword.module.scss";

const ResetPassword = () => {
  const { auth } = useContext(FirebaseContext) as ContextType;
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate(Pages.login);
    }
  });

  return (
    <div className={classes.resetPassword}>
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
          onClick={() => {
            sendPasswordReset(email);
          }}
        >
          Send link to reset Password
        </button>
        <div className={classes.resetPasswordText}>
          If you're not registered? Go to{" "}
          <Link to={Pages.register}>Registration</Link> page
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
