import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ClinicServiceSelector = () => {
  const [added, setAdded] = useState(false);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setAdded((prev) => !prev);
  };
  return (
    <div
      className={`flex shadow-md px-3 py-1 rounded-sm items-center ${
        added ? "bg-green-50" : "bg-stone-50"
      }`}
    >
      <p className="flex-grow ">Service Name</p>
      <button
        className="w-10 h-10 text-lg rounded-full shadow-lg flex items-center justify-center hover:bg-stone-300"
        onClick={handleAdd}
      >
        {added ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
};

export default ClinicServiceSelector;
