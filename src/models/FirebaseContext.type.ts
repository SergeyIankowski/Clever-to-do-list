import { auth, db } from "../firebase";

type FirebaseContextType = {
  db: typeof db;
  auth: typeof auth;
};

export default FirebaseContextType;
