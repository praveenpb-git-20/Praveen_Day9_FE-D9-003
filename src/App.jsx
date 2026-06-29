import "./App.css";

import EmployeeCard from "./components/EmployeeCard";
import TeamCard from "./components/TeamCard";
import DashboardCard from "./components/DashboardCard";

function App() {
  return (
    <div className="app">

      <h1 className="title">
        UI Components
      </h1>

      <DashboardCard />

      <EmployeeCard />

      <TeamCard />

    </div>
  );
}

export default App;