import { FC, useEffect, useState } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdSick } from "react-icons/md";
import CalenderDayOptions from "../CalenderDayOptions/CalenderDayOptions";

import { useAtom } from "jotai";
import { testAtom } from "../../atoms/testAtom/testAtom";

type Props = { date: Date; month: number };

const CalenderDay: FC<Props> = ({ date, month }) => {
  const [bgColor, setBgColor] = useState("bg-stone-50");
  const [overlap, setOverlap] = useState(false);
  const [staffStatus, setStaffStatus] = useState<
    "annualLeave" | "illness" | ""
  >("");

  const [testString] = useAtom(testAtom);
  console.log(testString, "testString");

  useEffect(() => {
    if (date.getMonth() !== month) {
      setBgColor("bg-stone-300");
      setOverlap(true);
      return;
    }
    if (staffStatus === "annualLeave" || staffStatus === "illness")
      return setBgColor("bg-red-50");

    if (date.getDay() === 0 || date.getDay() === 6)
      return setBgColor("bg-green-100");
    if (staffStatus === "") return setBgColor("bg-stone-50");
  }, [date, month, staffStatus]);

  return (
    <div
      className={`${bgColor} w-full h-full flex items-center justify-center relative border-solid border-stone-800 parent group ${
        overlap ? "" : "hover:brightness-90"
      } ${overlap ? "cursor-not-allowed" : "cursor-pointer"}`}
      style={{ borderWidth: "1px" }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {staffStatus === "illness" && <MdSick />}
        {staffStatus === "annualLeave" && <FaUmbrellaBeach />}
        <p>{testString}</p>
      </div>
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
