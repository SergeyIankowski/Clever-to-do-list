import { useContext, useEffect, useState } from "react";
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
import ConcreteTodo from "./pages/ConcreteTodo/ConcreteTodo";
import fetchUserName from "./firebase/fetchUserName";
import Spinner from "./components/view/Spinner/Spinner";

const AppRouter = () => {
  const { auth } = useContext(FirebaseContext) as ContextType;
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      const serverRequestDelay = 1000;
      setTimeout(() => fetchUserName(user, setName), serverRequestDelay);
    }
  }, [loading]);

  if (loading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  return (
    <Routes>
      <Route
        path={Pages.main}
        element={user ? <TodoBoard user={user!} name={name} /> : <Login user={user!} />}
      />
      <Route path={Pages.notfound} element={<Page404 />} />
      <Route path={Pages.login} element={<Login user={user!} />} />
      <Route path={Pages.todoBoard} element={<TodoBoard user={user!} name={name} />} />
      <Route path={Pages.todoPage} element={<ConcreteTodo user={user!} />} />
      <Route path={Pages.register} element={<Register user={user!} />} />
      <Route path={Pages.reset} element={<ResetPassword user={user!} />} />
    </Routes>
  );
};

export default AppRouter;
