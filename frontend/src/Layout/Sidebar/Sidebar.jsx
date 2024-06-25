import React, { useState, useEffect } from "react";
import { LuSchool } from "react-icons/lu";
import { PiStudentLight, PiChalkboardTeacherLight } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiArmorUpgrade } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import Logo from "../../Assets/sheSchoolLogo.jpeg"

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
      className={`pl-2 mt-${
        showIconsOnly ? "10" : ""
      } flex flex-col bg-customBlue text-gray-300 w-${
        showIconsOnly ? "16" : "64"
      } h-full overflow-y-hidden`}
    >
      <div className="flex items-center">
        {!showIconsOnly && (
          <img
            src={Logo}
            alt="schoolLogo"
            className="w-28 h-24 bg-customBlue"
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
            to="/home"
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
            <SlPeople size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="/transferstudents"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Promote Students
            </span>
            <GiArmorUpgrade size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>

        <div className="flex items-center mb-8">
          <Link
            to="/feevoucher"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              FeeVoucher
            </span>
            <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        {/* <div className="flex items-center mb-8">
          <Link
            to="/assignstudent"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Assign Students
            </span>
            <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
          </Link>
        </div> */}
        {/* <div className="flex items-center mb-8">
          <Link
            to="/assignteacher"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              AssignTeacher
            </span>
            <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
          </Link>
        </div> */}
        <div className="flex items-center mb-8">
          <Link
            to="/createclasses"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Create Class
            </span>
            <PiChalkboardTeacherLight size={showIconsOnly ? 24 : 20} />
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
            to="/allteachers"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              All Teachers
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
            <FaBookOpen size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>

        <div className="flex items-center mb-8">
          <Link
            to="/timetable"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Timetable
            </span>
            <IoCalendarNumberOutline size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        {/* <div className="flex items-center mb-8">
          <Link
            to="createsubject"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Create Subjects
            </span>
            <LuCalendarClock size={showIconsOnly ? 24 : 20} />
          </Link>
        </div> */}
        <div className="flex items-center mb-8">
          <Link
            to="assignsubject"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              Assign Subjects
            </span>
            <MdOutlineAttachMoney size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="allclasses"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
              AllClasses
            </span>
            <MdOutlineAttachMoney size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
        <div className="flex items-center mb-8">
          <Link
            to="/assignfee"
            className={`flex items-center w-full ${
              showIconsOnly ? "justify-center" : ""
            }`}
          >
            <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
             Assign Fee
            </span>
            <IoCalendarNumberOutline size={showIconsOnly ? 24 : 20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
