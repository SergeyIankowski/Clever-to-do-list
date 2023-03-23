const getMonthDayAndWeekDayName = (date: Date) => {
  const monthDay = date.getDate();
  const dayName = date.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const monthName = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  return { monthDay, monthName, dayName, dateString, year };
};

export default getMonthDayAndWeekDayName;
