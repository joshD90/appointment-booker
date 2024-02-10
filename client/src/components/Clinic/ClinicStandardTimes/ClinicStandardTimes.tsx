import ClinicTimesSelector from "../../../microcomponents/CinicTimesSelector/ClinicTimesSelector";
import { DayOfWeek } from "../../../types/types";

const ClinicStandardTimes = () => {
  const daysOfWeek: DayOfWeek[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return (
    <section className="w-1/2 rounded-lg shadow-md p-5 bg-stone-200 text-stone-800 flex flex-col gap-5 mt-5">
      {daysOfWeek.map((day) => (
        <ClinicTimesSelector day={day} key={day} />
      ))}
    </section>
  );
};

export default ClinicStandardTimes;
