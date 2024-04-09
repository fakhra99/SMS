import React from "react";
import { Chart } from "react-charts";

const MyCharts = () => {
  // Dummy student data
  const studentsData = React.useMemo(
    () => [
      { label: "Present", count: 55 },
      { label: "Absent", count: 30 },
    ],
    []
  );

  // Convert student data into chart data format
  const data = React.useMemo(
    () =>
      studentsData.map((student) => ({
        label: student.label,
        data: [[student.label, student.count]],
      })),
    [studentsData]
  );

  // Axes configuration for the bar chart
  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  // Render the bar chart
  const barChart = (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} series={{ type: "bar" }} />
    </div>
  );

  return barChart;
};

export default MyCharts;
