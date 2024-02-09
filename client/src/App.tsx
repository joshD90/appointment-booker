import { Route, Routes } from "react-router-dom";
import "./App.css";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper";

import MonthlyCalender from "./pages/calender/monthlyCalender/MonthlyCalender";
import ClinicContainer from "./pages/clinic/ClinicContainer/ClinicContainer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/month" element={<MonthlyCalender />} />
        <Route path="/clinic/:id" element={<ClinicContainer />} />
      </Routes>
      <ModalWrapper />
    </div>
  );
}

export default App;
