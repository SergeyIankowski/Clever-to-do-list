import { useContext } from "react";
import FirebaseContextType from "../models/FirebaseContext.type";
import FirebaseContext from "../models/firebaseContext";

const useFirebaseContext = () => {
  const { auth, db } = useContext(FirebaseContext) as FirebaseContextType;
  return { auth, db };
};

export default useFirebaseContext;
