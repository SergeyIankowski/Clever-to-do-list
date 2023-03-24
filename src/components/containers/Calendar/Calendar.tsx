import { FC, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import createDateWithOffset from "../../../utils/createDateWithOffset";
import DayCard from "../DayCard/DayCard";
import classes from "./calendar.module.scss";
import CalendarProps from "./interface";

const Calendar: FC<CalendarProps> = ({ today }) => {
  const generateArr = () => new Array(30).fill(1);
  const [days, setDays] = useState(generateArr());

  const cardsNodes = days.map((_, index) => {
    const finalDate = createDateWithOffset(new Date(), index);
    const keyFromDate = finalDate.toLocaleDateString("en-US");
    return <DayCard key={keyFromDate} today={today} dateOffset={index} />;
  });

  const makeMoreDays = () => {
    setTimeout(() => setDays([...days, ...generateArr()]), 1000);
  };

  return (
    <div className={classes.container} id="scrollableDiv">
      <InfiniteScroll
        dataLength={days.length}
        next={makeMoreDays}
        hasMore
        loader={<div>...Loading</div>}
        className={classes.calendar}
        scrollableTarget="scrollableDiv"
      >
        {cardsNodes}
      </InfiniteScroll>
    </div>
  );
};

export default Calendar;
