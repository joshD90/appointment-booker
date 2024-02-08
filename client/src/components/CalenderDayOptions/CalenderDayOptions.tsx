import React, { FC, SetStateAction } from "react";
import { FaClock, FaUmbrellaBeach } from "react-icons/fa";
import { MdSick } from "react-icons/md";

type Props = {
  setStaffStatus: React.Dispatch<
    SetStateAction<"annualLeave" | "illness" | "">
  >;
};

const CalenderDayOptions: FC<Props> = ({ setStaffStatus }) => {
  const toggleStaffStatus = (statusType: "illness" | "annualLeave") => {
    setStaffStatus((prev) => {
      if (prev === statusType) return "";
      return statusType;
    });
  };

  const showTimeModal = () => {
    console.log("Showing Time Modal");
  };
  return (
    <div className="rounded-md flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3 bg-stone-700 h-10 p-3 text-stone-50">
      <button
        onClick={() => toggleStaffStatus("annualLeave")}
        className="hover:scale-150"
      >
        <FaUmbrellaBeach />
      </button>
      <button
        className="hover:scale-150"
        onClick={() => toggleStaffStatus("illness")}
      >
        <MdSick />
      </button>
      <button className="hover:scale-150" onClick={showTimeModal}>
        <FaClock />
      </button>
    </div>
  );
};

export default CalenderDayOptions;
