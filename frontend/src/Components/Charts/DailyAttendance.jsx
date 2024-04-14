import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const DailyAttendance = () => {
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

  return (
    <div className="w-full max-w-screen-lg mx-auto overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">
        Students Attendance
      </h1>
      <AreaChart
        width={650}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAbsent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f44336" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f44336" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="present"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPresent)"
        />
        <Area
          type="monotone"
          dataKey="absent"
          stroke="#f44336"
          fillOpacity={1}
          fill="url(#colorAbsent)"
        />
      </AreaChart>
    </div>
  );
};

export default DailyAttendance;
