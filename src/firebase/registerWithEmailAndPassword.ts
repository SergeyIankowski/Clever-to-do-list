import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import validateRegisterWithEmailAndPassword from "../utils/validationErrors/validateRegisterWithEmailAndPassword";
import { auth, db } from "./firebase";

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  notifyCallback: (str: string) => void,
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const { user } = response;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (e) {
    if (e instanceof Error) {
      validateRegisterWithEmailAndPassword(e, notifyCallback);
    }
  }
};

export default registerWithEmailAndPassword;
