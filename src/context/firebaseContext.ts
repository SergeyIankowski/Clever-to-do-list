import { createContext } from "react";
import ContextType from "./FirebaseContext.type";

const FirebaseContext = createContext<ContextType | null>(null);

export default FirebaseContext;
