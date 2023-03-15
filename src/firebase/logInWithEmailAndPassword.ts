import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(
        `logInWithEmailAndPassword method has error witch code ${e.message}`,
      );
    }
    throw new Error(`Unexpected error in logInWithEmailAndPassword ${e}`);
  }
};

export default logInWithEmailAndPassword;
