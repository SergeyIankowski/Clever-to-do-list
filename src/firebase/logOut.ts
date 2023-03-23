import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const logOut = async () => {
  await signOut(auth);
};

export default logOut;
