import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Page404 from "./components/Page404/Page404";
import Register from "./components/Register/Register";
import TodoBoard from "./components/todoBoard/TodoBoard";
import Pages from "./models/Pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.notfound} element={<Page404 />} />
      <Route path={Pages.login} element={<Login />} />
      <Route path={Pages.register} element={<Register />} />
      <Route path={Pages.todoBoard} element={<TodoBoard />} />
    </Routes>
  );
};

export default AppRouter;
