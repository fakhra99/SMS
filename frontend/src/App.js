// App.js
import React from "react";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Addstudent from "./Pages/Addstudent/Addstudent";
import Addteacher from "./Pages/AddTeacher/Addteacher";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllStudents from "./Pages/AllStudents/AllStudents";
import AddCourse from "./Pages/Courses/AddCourse";
import AllCourses from "./Pages/Courses/AllCourses";

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
            <Route path="/courses" element={<AddCourse />} />
             <Route path="/allcourses" element={<AllCourses />} />
           </Routes>
          </div>
        </div>
      
      </div>
    
    </>
  
  );
}

export default App;