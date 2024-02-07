export const getDaysInMonth = (month: number, year: number) => {
  //set the date through going to the next month.  Of that next month, set the day to 0 which will give us the date of the last month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return daysInMonth;
};
