import React from 'react';
import DailyAttendance from '../../Components/Charts/DailyAttendance';
import EmployeeAttendance from '../../Components/Charts/EmployeeAttendance';

const Dashboard = () => {
  return (
    <div>
      <section class="text-gray-600 body-font -mt-24">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <DailyAttendance/>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <EmployeeAttendance/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard