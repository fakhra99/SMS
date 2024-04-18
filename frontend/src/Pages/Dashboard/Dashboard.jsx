import React from "react";
import DailyAttendance from "../../Components/Charts/DailyAttendance";
import EmployeeAttendance from "../../Components/Charts/EmployeeAttendance";
import SchoolGenderDistribution from "../../Components/Charts/SchoolGenderDistribution";

const Dashboard = () => {
  return (
    <div>
      <section className="text-gray-600 body-font -mt-24 bg-slate-100">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap justify-around bg-white">
            <div className="w-full lg:w-1/3 p-4">
              <DailyAttendance />
            </div>
            <div className="w-full lg:w-1/3 p-4 ">
              <EmployeeAttendance />
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <SchoolGenderDistribution />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
