import { createContext } from "react";
import ContextType from "./Context.type";

const FirebaseContext = createContext<ContextType | null>(null);

export default FirebaseContext;
