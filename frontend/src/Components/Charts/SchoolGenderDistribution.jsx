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
  { gender: "Male", students: 650 },
  { gender: "Female", students: 600 },
];

const SchoolGenderDistribution = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-md font-bold mb-4 text-center">
        Gender Distribution
      </h1>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="gender" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SchoolGenderDistribution;
