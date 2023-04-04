import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import createUserCollectionInFirebase from "./createUserCollectionInFirebase";
import validateSignInWithGoogleError from "../../utils/validationErrors/validateSignInWithGoogleError";
import addUserInfoToStore from "./addUserInfoToStore";
import { auth, db } from "../firebase";

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async (notifyCallback: (str: string) => void) => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const { user } = response;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addUserInfoToStore(db, user, "google");
      await createUserCollectionInFirebase(db, user);
    }
  } catch (e) {
    if (e instanceof Error) {
      validateSignInWithGoogleError(e, notifyCallback);
    }
  }
};

export default signInWithGoogle;
