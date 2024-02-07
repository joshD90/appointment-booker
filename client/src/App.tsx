import "./App.css";
import { getDaysInMonth } from "./pages/calender/calenderUtils/calenderUtils";
import MonthlyCalender from "./pages/calender/monthlyCalender/MonthlyCalender";

function App() {
  console.log(getDaysInMonth(7, 2024));
  return (
    <div>
      {/* <MonthlyCalender /> */}
      <div
        className="w-96 h-96 bg-blue-800"
        // style={{ width: "200px", height: "200px", background: "blue" }}
      ></div>
    </div>
  );
}

export default App;
