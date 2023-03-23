import Todo from "./TodoInterface";

interface TodosCollection {
  [index: string]: Todo[];
}

export default TodosCollection;
