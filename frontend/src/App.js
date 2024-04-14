import React from "react";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Boxes from "./Pages/Boxes/Boxes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <>
      <Header/>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow">
          <div className="flex flex-col h-full overflow-y-auto">
            <Boxes className="flex-grow" />
            <Dashboard className="flex-grow" />
            <Calendar className="flex-grow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
