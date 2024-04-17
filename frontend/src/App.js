// App.js
import React from "react";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Addstudent from "./Pages/Addstudent/Addstudent";
import Addteacher from "./Pages/AddTeacher/Addteacher";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllStudents from "./Pages/AllStudents/AllStudents";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex-grow overflow-y-auto">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addStudent" element={<Addstudent />} />
            <Route path="/addteacher" element={<Addteacher />} />
            <Route path="/allstudents" element={<AllStudents />} />
           </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;