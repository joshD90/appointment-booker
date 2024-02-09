import ClinicServiceSelector from "../../../microcomponents/ClinicServiceSelector/ClinicServiceSelector";

const ClinicServices = () => {
  return (
    <section className="w-1/2 rounded-lg shadow-md p-5 bg-stone-200 text-stone-800">
      <h2 className="text-center mb-4 text-xl">Services attached to Clinic</h2>
      <form className="flex flex-col gap-1">
        <ClinicServiceSelector />
        <ClinicServiceSelector />
        <ClinicServiceSelector />
        <ClinicServiceSelector />
        <ClinicServiceSelector />
        <ClinicServiceSelector />
      </form>
    </section>
  );
};

export default ClinicServices;
