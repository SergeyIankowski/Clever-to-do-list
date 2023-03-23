import { createUserWithEmailAndPassword } from "firebase/auth";
import createUserCollectionInFirebase from "./createUserCollectionInFirebase";
import validateRegisterWithEmailAndPassword from "../../utils/validationErrors/validateRegisterWithEmailAndPassword";
import addUserInfoToStore from "./addUserInfoToStore";
import { auth, db } from "../firebase";

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  notifyCallback: (str: string) => void,
) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = response;
    await addUserInfoToStore(db, user, "local");
    await createUserCollectionInFirebase(db, user);
  } catch (e) {
    if (e instanceof Error) {
      validateRegisterWithEmailAndPassword(e, notifyCallback);
    }
  }
};

export default registerWithEmailAndPassword;
