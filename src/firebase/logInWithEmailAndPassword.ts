import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const logInWithEmailAndPassword = async (
  email: string,
  password: string,
  callbackWithError: (str: string) => void,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Error) {
      if (e.message.includes("auth/wrong-password")) {
        callbackWithError("wrong password");
      }
      if (e.message.includes("auth/too-many-requests")) {
        callbackWithError("too many wrong password requests");
      }
    } else {
      throw new Error(`Unexpected error in logInWithEmailAndPassword ${e}`);
    }
  }
};

export default logInWithEmailAndPassword;
