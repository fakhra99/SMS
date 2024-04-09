import React from "react";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Boxes from "./Pages/Boxes/Boxes";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <Boxes />
          <Dashboard/>
        </div>
      </div>
    </>
  );
}

export default App;
