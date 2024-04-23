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
      className={`pl-2 mt-${showIconsOnly ? "10" : ""} flex flex-col w-${
        showIconsOnly ? "16" : "64"
      } h-full overflow-y-hidden`}
    >
      <div className="flex items-center">
        {!showIconsOnly && (
          <img
            src="https://eschool-saas.wrteam.me/storage/school-settings/655c4a39862746.922441361700547129.svg"
            alt="schoolLogo"
            className="w-28 h-20 transition-all"
          />
        )}
        <FiAlignJustify
          onClick={toggleIcons}
          className={`cursor-pointer ml-8 w-20 ${
            showIconsOnly ? "text-center" : ""
          }`}
          style={{ width: "24px", height: "24px" }} // Fixed size for the toggle icon
        />
      </div>

      <div className="flex flex-col pr-4 pt-4">
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
            <LuSchool size={showIconsOnly ? 24 : 20} />
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
          <Link
            to="/courses"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Courses
            </span>
            <LuCalendarClock size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        
        <div className="flex items-center mb-8">
          <Link
            to=""
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Fee
            </span>
            <MdOutlineAttachMoney size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>

        <div className="flex items-center mb-8">
          <Link
            to=""
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Calendar
            </span>
            <LuCalendarClock size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
