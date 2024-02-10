import ClinicServices from "../../../components/Clinic/ClinicServices/ClinicServices";
import ClinicStandardTimes from "../../../components/Clinic/ClinicStandardTimes/ClinicStandardTimes";

const ClinicContainer = () => {
  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center flex-col bg-stone-50 py-5">
      <ClinicServices />
      <ClinicStandardTimes />
    </div>
  );
};

export default ClinicContainer;
