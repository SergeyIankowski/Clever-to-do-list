import { auth, db } from "./firebase";
import logInWithEmailAndPassword from "./logInWithEmailAndPassword";
import logOut from "./logOut";
import registerWithEmailAndPassword from "./registerWithEmailAndPassword";
import sendPasswordReset from "./sendPasswordReset";
import signInWithGoogle from "./signInWithGoogle";

export default {
  auth,
  db,
  logInWithEmailAndPassword,
  logOut,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
};
