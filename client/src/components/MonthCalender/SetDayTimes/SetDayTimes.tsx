import { FC } from "react";

import DualRangeSlider from "../../../microcomponents/dualRangeSlider/DualRangeSlider";

type Props = { date: Date };

const SetDayTimes: FC<Props> = ({ date }) => {
  const timesAvailable = [
    "05:00",
    "06.00",
    "07.00",
    "08.00",
    "09.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    // "18.00",
    // "19.00",
    // "20.00",
    // "21.00",
    // "22.00",
  ];

  return (
    <div className="border-2 border-solid border-stone-800 rounded-md p-5 bg-stone-50 w-4/5">
      <h2 className="mb-10 text-center">
        Opening Times for {date.toLocaleDateString()}
      </h2>
      <form>
        <DualRangeSlider rangeArray={timesAvailable} smallestIncrement={0.25} />
      </form>
    </div>
  );
};

export default SetDayTimes;
