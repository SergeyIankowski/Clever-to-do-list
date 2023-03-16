import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(
        `sendPasswordReset method has error witch code ${e.message}`,
      );
    }
    throw new Error(`Unexpected error in sendPasswordReset ${e}`);
  }
};

export default sendPasswordReset;
