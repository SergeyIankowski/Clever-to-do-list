import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import TodoBoard from "./pages/todoBoard/TodoBoard";
import ContextType from "./models/Context.type";
import FirebaseContext from "./models/firebaseContext";
import Pages from "./models/Pages";

const AppRouter = () => {
  const { auth } = useContext(FirebaseContext) as ContextType;
  const [user] = useAuthState(auth);
  return (
    <Routes>
      <Route path={Pages.main} element={user ? <TodoBoard /> : <Login />} />
      <Route path={Pages.notfound} element={<Page404 />} />
      <Route path={Pages.login} element={<Login />} />
      <Route path={Pages.register} element={<Register />} />
      <Route path={Pages.reset} element={<ResetPassword />} />
      <Route path={Pages.todoBoard} element={<TodoBoard />} />
    </Routes>
  );
};

export default AppRouter;
