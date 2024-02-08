import "./App.css";
import { getDaysInMonth } from "./pages/calender/calenderUtils/calenderUtils";
import MonthlyCalender from "./pages/calender/monthlyCalender/MonthlyCalender";

function App() {
  console.log(getDaysInMonth(7, 2024));
  return <MonthlyCalender />;
}

export default App;
