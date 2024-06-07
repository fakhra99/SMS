import React, { useEffect, useState } from "react";
import Axios from "axios";

const Timetabledata = () => {
  const [timetable, setTimetable] = useState([]);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const timeSlots = [
    { start: "08:00am", end: "09:00am" },
    { start: "09:00am", end: "10:00am" },
    { start: "10:00am", end: "11:00am" },
    { start: "11:00am", end: "12:00pm" },
    { start: "12:00pm", end: "01:00pm" },
    { start: "01:00pm", end: "02:00pm" },
  ];

  useEffect(() => {
    Axios.get("http://localhost:4041/api/getTimetable")
      .then((response) => {
        console.log("Fetched data:", response.data); // Log fetched data
        setTimetable(response.data);
      })
      .catch((error) => console.error("Error fetching timetable data:", error));
  }, []);

  // Helper function to convert time string to ISO 8601 string with a fixed date
  const convertToISOTime = (time) => {
    const [hour, minute, period] = time.match(/(\d+):?(\d+)?(am|pm)/i).slice(1);
    let hours = parseInt(hour);
    if (period.toLowerCase() === "pm" && hours !== 12) hours += 12;
    if (period.toLowerCase() === "am" && hours === 12) hours = 0;
    const minutes = minute ? parseInt(minute) : 0;
    return new Date(1970, 0, 1, hours, minutes).toISOString();
  };

  const getEntriesForTimeSlotAndDay = (timeSlot, day) => {
    const startTime = new Date(
      `1970-01-01T${convertToISOTime(timeSlot.start).split("T")[1]}`
    );
    const endTime = new Date(
      `1970-01-01T${convertToISOTime(timeSlot.end).split("T")[1]}`
    );

    return timetable
      .filter(
        (entry) =>
          entry.day === day &&
          new Date(entry.startTime).getTime() === startTime.getTime() &&
          new Date(entry.endTime).getTime() === endTime.getTime()
      )
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
                Time
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
            {timeSlots.map((timeSlot, index) => (
              <tr key={index}>
                <td
                  className="px-6 py-4 border-b border-gray
                -300 bg-customBlue text-white text-sm leading-5 font-medium"
                >
                  {timeSlot.start} - {timeSlot.end}
                </td>
                {daysOfWeek.map((day) => (
                  <td
                    key={`${timeSlot.start}-${day}`}
                    className="px-6 py-4 border-b border-gray-300 text-sm leading-5 text-gray-900"
                  >
                    {getEntriesForTimeSlotAndDay(timeSlot, day)}
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
