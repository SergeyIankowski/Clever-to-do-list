import TodosCollection from "../models/TodosCollection";

const getDayBoardTitle = (todosCollection: TodosCollection, currentDate: string) => {
  const dayCollection = todosCollection[currentDate];
  const tasksInDayCollection = dayCollection ? dayCollection.length : 0;
  const title = currentDate
    ? `${tasksInDayCollection} tasks available on ${currentDate}`
    : "Choose a day";
  return title;
};

export default getDayBoardTitle;
