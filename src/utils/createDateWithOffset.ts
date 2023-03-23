const createDateWithOffset = (initialDate: Date, offset: number) => {
  const finalDate = new Date(initialDate);
  finalDate.setDate(finalDate.getDate() + offset);
  return finalDate;
};
export default createDateWithOffset;
