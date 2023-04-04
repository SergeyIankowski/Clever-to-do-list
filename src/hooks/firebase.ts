import { useContext } from "react";
import FirebaseContext from "../context/firebaseContext";
import FirebaseContextType from "../context/FirebaseContext.type";

const useFirebaseContext = () => {
  const { auth, db } = useContext(FirebaseContext!) as FirebaseContextType;
  return { auth, db };
};

export default useFirebaseContext;
