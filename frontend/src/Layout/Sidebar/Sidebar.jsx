import React, { useState } from "react";
import { LuSchool, LuLayoutDashboard, LuCalendarClock } from "react-icons/lu";
import { PiStudentLight, PiChalkboardTeacherLight } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";

const Sidebar = () => {
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  const toggleIcons = () => {
    setShowIconsOnly(!showIconsOnly);
  };

  return (
    <div
      className={`pl-10 mt-6 w-${showIconsOnly ? "20" : "64"} h-screen`}
      style={{ overflowY: showIconsOnly ? "auto" : "hidden" }}
    >
      <div className="flex flex-col">
        <FiAlignJustify onClick={toggleIcons} className="cursor-pointer mb-4" />
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Dashboard
          </span>
          <LuLayoutDashboard />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Academic
          </span>
          <LuSchool />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Student
          </span>
          <PiStudentLight />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Teacher
          </span>
          <PiChalkboardTeacherLight />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Fees
          </span>
          <MdOutlineAttachMoney />
        </div>
        <div className="flex items-center mb-8">
          <span className={`w-44 ${showIconsOnly ? "hidden" : "block"}`}>
            Timetable
          </span>
          <LuCalendarClock />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
