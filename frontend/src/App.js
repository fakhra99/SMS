import React from "react";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Addstudent from "./Pages/Addstudent/Addstudent";
import Addteacher from "./Pages/AddTeacher/Addteacher";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllStudents from "./Pages/AllStudents/AllStudents";
import Timetable from "./Pages/Timetable/Timetable";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addStudent" element={<Addstudent />} />
            <Route path="/addteacher" element={<Addteacher />} />
            <Route path="/allstudents" element={<AllStudents />} />
            <Route path="/timetable" element={<Timetable />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
