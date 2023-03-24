import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import TodosContainer from "../../components/containers/TodoContainer/TodosContainer";
import Wrapper from "../../components/Wrapper/Wrapper";
import Pages from "../../models/Pages";
import TodoBoardProps from "./interface";

const TodoBoard: FC<TodoBoardProps> = ({ user, name }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(Pages.login);
  });
  return (
    <Wrapper>
      <Header userName={name} />
      <TodosContainer user={user} />
    </Wrapper>
  );
};

export default TodoBoard;
