import React from "react";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Boxes from "./Pages/Boxes/Boxes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <Boxes />
          <Dashboard/>
          <Calendar/>
          
        </div>
      </div>
    </>
  );
}

export default App;
