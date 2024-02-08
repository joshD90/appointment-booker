import { FC, useEffect, useState } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdSick } from "react-icons/md";
import CalenderDayOptions from "../CalenderDayOptions/CalenderDayOptions";

type Props = { date: Date; month: number };

const CalenderDay: FC<Props> = ({ date, month }) => {
  const [bgColor, setBgColor] = useState("bg-stone-50");
  const [overlap, setOverlap] = useState(false);
  const [staffStatus, setStaffStatus] = useState<
    "annualLeave" | "illness" | ""
  >("");

  useEffect(() => {
    if (date.getMonth() !== month) {
      setBgColor("bg-stone-400");
      setOverlap(true);
      return;
    }
    if (date.getDay() === 0 || date.getDay() === 6)
      return setBgColor("bg-green-200");
  }, [date, month]);

  return (
    <div
      className={`${bgColor} w-full h-full flex items-center justify-center relative border-solid border-stone-800 parent group ${
        overlap ? "" : "hover:brightness-90"
      } ${overlap ? "cursor-not-allowed" : "cursor-pointer"}`}
      style={{ borderWidth: "1px" }}
    >
      {staffStatus === "illness" && <MdSick />}
      {staffStatus === "annualLeave" && <FaUmbrellaBeach />}
      <p className="absolute right-1 top-1">{date.getDate()}</p>
      {!overlap ? (
        <div className="child hidden group-hover:block">
          <CalenderDayOptions setStaffStatus={setStaffStatus} />
        </div>
      ) : null}
    </div>
  );
};

export default CalenderDay;
