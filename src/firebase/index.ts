import { auth, db } from "./firebase";
import logInWithEmailAndPassword from "./logInWithEmailAndPassword";
import logOut from "./logOut";
import registerWithEmailAndPassword from "./registration/registerWithEmailAndPassword";
import sendPasswordReset from "./sendPasswordReset";
import signInWithGoogle from "./registration/signInWithGoogle";

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logOut,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
};
