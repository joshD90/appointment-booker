import { FC } from "react";
import { DayOfWeek } from "../../types/types";
import DualRangeSlider from "../dualRangeSlider/DualRangeSlider";

type Props = { day: DayOfWeek };

const ClinicTimesSelector: FC<Props> = ({ day }) => {
  const timeRange = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  return (
    <div className="flex items-start p-5 bg-stone-50 rounded-sm shadow-lg">
      <p className="w-20">{day.slice(0, 3).toUpperCase()}</p>
      <div className="flex-grow text-xs">
        <DualRangeSlider rangeArray={timeRange} smallestIncrement={0.5} />
      </div>
    </div>
  );
};

export default ClinicTimesSelector;
