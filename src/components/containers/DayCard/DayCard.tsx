import { FC } from "react";
import { useDispatch } from "react-redux";
import { useAppActionCreators, useAppStore } from "../../../hooks/redux";
import createDateWithOffset from "../../../utils/createDateWithOffset";
import getMonthDayAndWeekDayName from "../../../utils/getMonthDayAndWeekDayName";
import classes from "./dayCard.module.scss";
import DayCardProps from "./interface";

const DayCard: FC<DayCardProps> = ({ today, dateOffset }) => {
  const finalDate = createDateWithOffset(today, dateOffset);
  const { monthDay, monthName, dayName, dateString, year } = getMonthDayAndWeekDayName(finalDate);

  const { todosCollection, currentDate } = useAppStore();
  const { setDate } = useAppActionCreators();
  const dispatch = useDispatch();

  const currentDayTodos = todosCollection[dateString];
  const hasTasks = currentDayTodos ? currentDayTodos.find((item) => item.done === true) : false;
  const hasIncompletedTasks = currentDayTodos
    ? currentDayTodos.find((item) => item.done === false)
    : false;
  return (
    <button
      type="button"
      className={`${classes.container} ${dateString === currentDate ? classes.containerHover : ""}`}
      onClick={() => dispatch(setDate(dateString))}
    >
      <h4 className={classes.dayName}>{dayName}</h4>
      <p className={classes.monthDay}>{monthDay}</p>
      <p className={classes.monthName}>{monthName}</p>
      <p className={classes.year}>{year}</p>
      <div className={classes.markersContainer}>
        {hasTasks && <div className={`${classes.marker} ${classes.markerTasks}`} />}
        {hasIncompletedTasks && (
          <div className={`${classes.marker} ${classes.markerIncompletedTasks}`} />
        )}
      </div>
    </button>
  );
};

export default DayCard;
