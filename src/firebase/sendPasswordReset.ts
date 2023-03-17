import { sendPasswordResetEmail } from "firebase/auth";
import validateSendPasswordResetError from "../utils/validationErrors/validateSendPasswordResetError";
import { auth } from "./firebase";

const sendPasswordReset = async (
  email: string,
  notifyCallback: (str: string) => void,
) => {
  try {
    await sendPasswordResetEmail(auth, email);
    notifyCallback("The link to change the password was sent");
  } catch (e) {
    if (e instanceof Error) {
      validateSendPasswordResetError(e, notifyCallback);
    }
  }
};

export default sendPasswordReset;
