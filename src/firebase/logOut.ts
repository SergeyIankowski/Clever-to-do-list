import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
  }
};

export default logOut;
