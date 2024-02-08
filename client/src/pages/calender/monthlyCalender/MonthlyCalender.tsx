import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

import CalenderDay from "../../../components/CalenderDay/CalenderDay";
import {
  convertMonthsToInt,
  createMonthDatesArray,
  daysOfWeek,
} from "../calenderUtils/calenderUtils";

URLSearchParams;

const MonthlyCalender = () => {
  // const [queryParams] = useSearchParams();
  // const month = queryParams.get("month");
  // const year = queryParams.get("year");
  const month = "Feb";
  const year = "2024";

  const [daysArray, setDaysArray] = useState<Date[]>([]);

  useEffect(() => {
    setDaysArray((prev) => {
      if (!year || !month) return prev;
      const yearInt = parseInt(year);
      const monthNumber = convertMonthsToInt(month);
      if (isNaN(yearInt) || monthNumber === -1) return prev;

      return createMonthDatesArray(yearInt, monthNumber);
    });
  }, [year, month]);

  if (!month || !year)
    return <div>You need a month and a year in search params</div>;

  return (
    <section
      className="grid grid-cols-7 border-2 border-solid border-blue bg-green-500 w-screen h-screen text-stone-700"
      style={{ gridTemplateRows: "2rem" }}
    >
      {daysOfWeek.map((day) => (
        <div
          className="h-full w-full flex items-center justify-end pr-2"
          style={{ border: "1px solid black" }}
        >
          {day}
        </div>
      ))}
      {daysArray.map((day) => (
        <CalenderDay date={day} month={convertMonthsToInt(month)} />
      ))}
    </section>
  );
};

export default MonthlyCalender;
