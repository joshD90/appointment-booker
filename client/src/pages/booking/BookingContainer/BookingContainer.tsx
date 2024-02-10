import Select from "react-select";
import DatePicker from "react-datepicker";

const BookingContainer = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <section className="w-full h-screen flex items-center justify-center text-stone-700">
      <div className="p-5 rounded-md shadow-md w-1/2 bg-stone-100">
        <h2 className="text-center mb-4">Book Procedure</h2>
        <form action="">
          <div className="">
            <label htmlFor="">Clinic Name</label>
            <select className="w-full p-2" name="clinicName">
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
            </select>
          </div>
          <div className="my-5">
            <label htmlFor="">Select Procedure</label>
            <select className="w-full p-2" name="clinicName">
              <option value="">Procedure1</option>
              <option value="">Procedure1</option>
              <option value="">Procedure1</option>
              <option value="">Procedure1</option>
              <option value="">Procedure1</option>
              <option value="">Procedure1</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="">Clinic Name</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              name="clinicName"
            >
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
              <option value="">Option1</option>
            </select>
          </div>
          <div className="mt-16">
            <label htmlFor="">Should See Something</label>
            <Select options={options} />
          </div>
          <div className="h-96">
            <DatePicker onChange={() => console.log("change")} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingContainer;
