import { auth, db } from "../firebase";

type ContextType = {
  db: typeof db;
  auth: typeof auth;
};

export default ContextType;
