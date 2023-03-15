import { createContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { auth, db } from "./firebase/firebase";

type ContextType = {
  firebase: typeof db;
  auth: typeof auth;
};

const Context = createContext<ContextType | null>(null);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Context.Provider value={{ firebase: db, auth }}>
      <AppRouter />
    </Context.Provider>
  </BrowserRouter>,
);
