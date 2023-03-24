import { User } from "firebase/auth";

interface TodoBoardProps {
  user: User;
  name: string;
}

export default TodoBoardProps;
