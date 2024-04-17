import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const DailyAttendance = () => {
  const data = [
    {
      name: "Present",
      value: 150,
    },
    {
      name: "Absent",
      value: 50,
    },
    {
      name: "Leaves",
      value: 20,
    },
  ];

  const COLORS = ["#82ca9d", "#f44336", "#8884d8"];

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1 className="text-md font-bold mb-4 text-center">
        Students Attendance
      </h1>
      <div className="mx-auto">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyAttendance;
