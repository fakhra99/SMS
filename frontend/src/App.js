import React from "react";
import Login from "./Pages/Login/Login";
import Header from "./Layout/Header/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Addstudent from "./Pages/Addstudent/Addstudent";
import Addteacher from "./Pages/AddTeacher/Addteacher";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllStudents from "./Pages/AllStudents/AllStudents";
import SignIn from "./Pages/SignIn/SignIn";


// import Input from "./Components/InputField/Input";





function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/Login" element={<Login/>}/>
            <Route path="/addStudent" element={<Addstudent />} />
            <Route path="/addteacher" element={<Addteacher />} />
            <Route path="/allstudents" element={<AllStudents />} />
            <Route path ="SignIn" element={<SignIn/>}/>


          </Routes>
        </div>
        {/* <Input/> */}
        {/* <Login/> */}

      </div>
    </>
  );
}

export default App;
