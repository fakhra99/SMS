import React, { useEffect, useState } from "react";
import Axios from "axios";

const Timetabledata = () => {
  const [timetable, setTimetable] = useState([]);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const classNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    Axios.get("http://localhost:4041/api/getTimetable")
      .then((response) => {
        console.log("Fetched data:", response.data); // Log fetched data
        setTimetable(response.data);
      })
      .catch((error) => console.error("Error fetching timetable data:", error));
  }, []);

  const getEntriesForClassAndDay = (classNumber, day) => {
    return timetable
      .filter((entry) => entry.class === classNumber && entry.day === day)
      .map((entry) => (
        <div key={entry._id} className="mb-2">
          <div>
            <strong>Course:</strong> {entry.course?.course_Title}
          </div>
          <div>
            <strong>Teacher:</strong> {entry.teacher?.First_Name}{" "}
            {entry.teacher?.Last_Name}
          </div>
          <div>
            <strong>Time:</strong>{" "}
            {new Date(entry.startTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {new Date(entry.endTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      ));
  };

  return (
    <div className="container mx-auto p-2 mt-4 bg-slate-100">
      <h1 className="text-xl font-bold mb-4">Timetable</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 bg-customBlue text-white text-left text-xs leading-4 font-medium uppercase tracking-wider">
                Classes
              </th>
              {daysOfWeek.map((day) => (
                <th
                  key={day}
                  className="px-6 py-3 border-b-2 border-gray-300 bg-customBlue text-white text-left text-xs leading-4 font-medium uppercase tracking-wider"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {classNumbers.map((classNumber) => (
              <tr key={classNumber}>
                <td className="px-6 py-4 border-b border-gray-300 bg-customBlue text-white text-sm leading-5 font-medium">
                  Class {classNumber}
                </td>
                {daysOfWeek.map((day) => (
                  <td
                    key={`${classNumber}-${day}`}
                    className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-900"
                  >
                    {getEntriesForClassAndDay(classNumber, day)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetabledata;
