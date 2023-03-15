import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase";

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
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
      throw new Error(
        `registerWithEmailAndPassword method has error witch code ${e.message}`,
      );
    }
    throw new Error(`Unexpected error in registerWithEmailAndPassword ${e}`);
  }
};

export default registerWithEmailAndPassword;
