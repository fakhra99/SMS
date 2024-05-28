import React, { useEffect, useState } from "react";
import axios from "axios";
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

const TeacherGenderDistribution = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGenderDistribution = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4041/api/teachers/gender"
        );
        const formattedData = response.data.genderDistribution.map((item) => ({
          gender: item._id,
          count: item.count,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching gender distribution data:", error);
      }
    };

    fetchGenderDistribution();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-md font-bold mb-4 text-center">
        Gender Distribution (Teachers)
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
            <Bar dataKey="count" name="Teachers" fill="#118432" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeacherGenderDistribution;
