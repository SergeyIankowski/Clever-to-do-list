import { signInWithEmailAndPassword } from "firebase/auth";
import validateSignInWithPasswordAndEmailErrors from "../utils/validationErrors/validateSignInWithPasswordAndEmailErrors";
import { auth } from "./firebase";

const logInWithEmailAndPassword = async (
  email: string,
  password: string,
  notifyCallback: (str: string) => void,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Error) {
      validateSignInWithPasswordAndEmailErrors(e, notifyCallback);
    }
  }
};

export default logInWithEmailAndPassword;
