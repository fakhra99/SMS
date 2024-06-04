import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Addstudent from "./Pages/Addstudent/Addstudent";
import Addteacher from "./Pages/AddTeacher/Addteacher";
import Home from "./Pages/Home";
import AllStudents from "./Pages/AllStudents/AllStudents";
import Courses from "./Pages/Courses/Course";
import TimetableFormAndTable from "./Pages/Timetable/Timetable";
import TransferStudents from "./Pages/TransferStudents/TransferStudents";
import FeeVoucherForm from "./Pages/FeeVouher/feevoucher";
import Createclass from "./Pages/Createclass/Createclass";
import Assignstudent from "./Pages/Asignstudents/Asignstudent";
import Assignsubject from "./Pages/Assignsubject/Assignsubject";
// import Createsubject from "./Pages/Createsubject/Createsubject";
import AssignTeacher from "./Pages/AssignTeacher/AssignTeacher";
import AllClasses from "./Pages/AllClasses/AllClasses";
import Signup from "./Pages/SignupLogin/Signup";
import Login from "./Pages/SignupLogin/Login";
import AllTeachers from "./Pages/AllTeachers/AllTeachers";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log("Stored User on mount:", user); // Log user data on mount
      setIsAuthenticated(true);
      setUserRole(user.role);
    }
  }, []);

  const handleLogin = (role) => {
    console.log("Logged in with role:", role); // Added log for login role
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem("user", JSON.stringify({ role })); // Save user data on login
  };

  const handleLogout = () => {
    console.log("Logging out");
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="flex">
      {isAuthenticated && userRole === 'admin' && <Sidebar />}
      <div className="flex flex-col w-full">
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {isAuthenticated ? (
              userRole === 'admin' ? (
                <>
                  <Route path="/home" element={<Home />} />
                  <Route path="/addStudent" element={<Addstudent />} />
                  <Route path="/addteacher" element={<Addteacher />} />
                  <Route path="/allteachers" element={<AllTeachers />} />
                  <Route path="/allstudents" element={<AllStudents />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/timetable" element={<TimetableFormAndTable />} />
                  <Route path="/transferstudents" element={<TransferStudents />} />
                  <Route path="/feevoucher" element={<FeeVoucherForm />} />
                  <Route path="/assignsubject" element={<Assignsubject />} />
                  {/* <Route path="/createsubject" element={<Createsubject />} /> */}
                  <Route path="/assignstudent" element={<Assignstudent />} />
                  <Route path="/createclasses" element={<Createclass />} />
                  <Route path="/assignteacher" element={<AssignTeacher />} />
                  <Route path="/allclasses" element={<AllClasses />} />
                </>
              ) : (
                <Route
                  path="*"
                  element={<div className="text-center mt-20">Only admins are allowed.</div>}
                />
              )
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
