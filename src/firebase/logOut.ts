import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const logOut = () => {
  signOut(auth);
};

export default logOut;
