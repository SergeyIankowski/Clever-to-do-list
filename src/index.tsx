import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { auth, db } from "./firebase";
import FirebaseContext from "./models/firebaseContext";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ db, auth }}>
      <AppRouter />
    </FirebaseContext.Provider>
  </BrowserRouter>,
);
