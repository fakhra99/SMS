import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "2024-04-01",
    present: 25,
    absent: 5,
  },
  {
    date: "2024-04-02",
    present: 30,
    absent: 3,
  },
  {
    date: "2024-04-03",
    present: 28,
    absent: 7,
  },
  {
    date: "2024-04-04",
    present: 27,
    absent: 8,
  },
  {
    date: "2024-04-05",
    present: 26,
    absent: 9,
  },
  {
    date: "2024-04-06",
    present: 29,
    absent: 6,
  },
  {
    date: "2024-04-07",
    present: 31,
    absent: 4,
  },
];

const EmployeeAttendance = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Employee Attendance</h1>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" name="Present" fill="#8884d8" />
            <Bar dataKey="absent" name="Absent" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
