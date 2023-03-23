import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { auth, db } from "./firebase";
import FirebaseContext from "./models/firebaseContext";
import "./sass/main.scss";
import { setupStore } from "./store/store";

const root = createRoot(document.getElementById("root") as HTMLElement);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <FirebaseContext.Provider value={{ db, auth }}>
        <AppRouter />
      </FirebaseContext.Provider>
    </Provider>
  </BrowserRouter>,
);
