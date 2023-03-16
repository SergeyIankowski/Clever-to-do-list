import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase";

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  callbackWithError: (str: string) => void,
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
      if (e.message.includes("auth/weak-password")) {
        callbackWithError("Password should be at least 6 characters");
      }
    }
  }
};

export default registerWithEmailAndPassword;
