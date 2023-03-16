import { sendPasswordResetEmail } from "firebase/auth";
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
      if (e.message.includes("auth/user-not-found")) {
        notifyCallback("User not found");
      }
    }
  }
};

export default sendPasswordReset;
