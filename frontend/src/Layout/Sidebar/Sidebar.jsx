import React, { useState, useEffect } from "react";
import { LuSchool, LuLayoutDashboard, LuCalendarClock } from "react-icons/lu";
import { PiStudentLight, PiChalkboardTeacherLight } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

const Sidebar = () => {
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleIcons = () => {
    setShowIconsOnly(!showIconsOnly);
  };

  // Effect to toggle sidebar based on screen size
  useEffect(() => {
    const handleResize = () => {
      setShowIconsOnly(window.innerWidth <= 768); 
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`pl-10 mt-6 w-${
        showIconsOnly ? "20" : "64"
      } h-screen overflow-y-auto`}
    >
      <div className="flex flex-col">
        <FiAlignJustify onClick={toggleIcons} className="cursor-pointer mb-4" />
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Dashboard
            </span>
            <LuLayoutDashboard size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Academic
            </span>
            <LuSchool size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="/addStudent"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Add Student
            </span>
            <PiStudentLight size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="/allstudents"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              All Students
            </span>
            <PiStudentLight size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="/addteacher"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Add Teacher
            </span>
            <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Fees
          </span>
          <MdOutlineAttachMoney size={showIconsOnly ? 24 : 20} />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Timetable
          </span>
          <LuCalendarClock size={showIconsOnly ? 24 : 20} />
        </div>

        {
           <div className="flex items-center mb-8">
           <Link
             to="/SignIn"
             className={`flex items-center w-full ${
               showIconsOnly ? "justify-center" : ""
             }`}
           >
             <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
             SignIn
             </span>
             <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
           </Link>
         </div>
        }
            <div className="flex items-center mb-8">
           <Link
             to="/Login"
             className={`flex items-center w-full ${
               showIconsOnly ? "justify-center" : ""
             }`}
           >
             <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
             Login-Page
             </span>
             <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
           </Link>
         </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            others
          </span>
          <LuCalendarClock size={showIconsOnly ? 24 : 20} />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            others
          </span>
          <LuCalendarClock size={showIconsOnly ? 24 : 20} />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            others
          </span>
          <LuCalendarClock size={showIconsOnly ? 24 : 20} />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            others
          </span>
          <LuCalendarClock size={showIconsOnly ? 24 : 20} />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            others
          </span>
          <LuCalendarClock size={showIconsOnly ? 24 : 20} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
