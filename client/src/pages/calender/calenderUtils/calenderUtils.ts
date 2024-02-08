export const getDaysInMonth = (month: number, year: number) => {
  //set the date through going to the next month.  Of that next month, set the day to 0 which will give us the date of the last month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return daysInMonth;
};

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const convertMonthsToInt = (month: string): number => {
  //have greater versatility when comparing months ie Jan, jan, january
  const monthAdj = month.toLowerCase().slice(0, 3);

  const indexOfMonth = months.findIndex((thisMon) => {
    const thisMonAdj = thisMon.toLowerCase().slice(0, 3);
    if (monthAdj === thisMonAdj) return true;
    return false;
  });

  return indexOfMonth;
};

export const createMonthDatesArray = (year: number, month: number): Date[] => {
  //sort out the dates we'll have to render from the previous month
  const numOfPrev = new Date(year, month, 1).getDay();
  const prevMonthDates: Date[] = [];
  const numOfDaysInPrev = getDaysInMonth(
    month - 1,
    month > 0 ? year : year - 1
  );
  const prevYear = month > 0 ? year : year - 1;
  const prevMonth = month > 0 ? month - 1 : 11;

  for (let i = numOfPrev - 1; i > 0; i--) {
    const newDate = new Date(prevYear, prevMonth, numOfDaysInPrev - i);
    prevMonthDates.push(newDate);
  }

  //sort out this month's dates
  const numOfDaysInCurrent = getDaysInMonth(month, year);
  const currentMonthsDates: Date[] = [];
  for (let i = 0; i < numOfDaysInCurrent; i++) {
    const newDate = new Date(year, month, i);
    currentMonthsDates.push(newDate);
  }

  //sort out next months
  const nextYear = month < 11 ? year : year + 1;
  const nextMonth = month < 11 ? month + 1 : 0;
  const overlapWithNext =
    6 - new Date(year, month, numOfDaysInCurrent).getDay();
  const nextMonthsDates: Date[] = [];
  for (let i = 0; i < overlapWithNext + 1; i++) {
    const newDate = new Date(nextYear, nextMonth, i);
    nextMonthsDates.push(newDate);
  }
  console.log(nextMonthsDates, "next months dates");

  return [...prevMonthDates, ...currentMonthsDates, ...nextMonthsDates];
};
