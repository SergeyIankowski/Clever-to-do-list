import { Route, Routes } from "react-router-dom";
import Pages from "./models/Pages";
import Main from "./pages/Main";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Pages.notfound} element={<Main />} />
      <Route path={Pages.main} element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
