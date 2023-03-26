import { User } from "firebase/auth";
import { addDoc, collection, Firestore } from "firebase/firestore";

const addUserInfoToStore = async (
  db: Firestore,
  user: User,
  typeOfAuthProvider: string,
  name?: string,
) => {
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name: name || user.displayName,
    authProvider: typeOfAuthProvider,
    email: user.email,
  });
};

export default addUserInfoToStore;
