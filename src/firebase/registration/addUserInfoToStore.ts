/* eslint-disable no-console */
import { User } from "firebase/auth";
import { addDoc, collection, Firestore } from "firebase/firestore";

const addUserInfoToStore = async (
  db: Firestore,
  user: User,
  typeOfAuthProvider: string,
  name?: string,
) => {
  try {
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name || user.displayName,
      authProvider: typeOfAuthProvider,
      email: user.email,
    });
  } catch (e) {
    console.error(e);
  }
};

export default addUserInfoToStore;
