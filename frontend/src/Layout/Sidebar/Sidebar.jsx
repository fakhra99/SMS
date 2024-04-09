import React, { useState } from "react";
import { LuSchool, LuLayoutDashboard, LuCalendarClock } from "react-icons/lu";
import { PiStudentLight, PiChalkboardTeacherLight } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="pl-10 mt-6  w-64 h-screen"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflowY: hovered ? "auto" : "hidden" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center mb-8">
          <span className="w-44">Dashboard</span>
          <LuLayoutDashboard />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Academic</span>
          <LuSchool />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Student</span>
          <PiStudentLight />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Teacher</span>
          <PiChalkboardTeacherLight />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Fees</span>
          <MdOutlineAttachMoney />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Timetable</span>
          <LuCalendarClock />
        </div>

        {/* other items */}
        <div className="flex items-center mb-8">
          <span className="w-44">Others</span>
          <PiChalkboardTeacherLight />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Others</span>
          <MdOutlineAttachMoney />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Others</span>
          <LuCalendarClock />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Others</span>
          <PiChalkboardTeacherLight />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Others</span>
          <MdOutlineAttachMoney />
        </div>
        <div className="flex items-center mb-8">
          <span className="w-44">Others</span>
          <LuCalendarClock />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
