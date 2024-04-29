import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../Components/buttons/Buttons.jsx";
import Dropdown from "../../Components/Dropdown/Dropdown";

const TimetableFormAndTable = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({
    startTime: new Date(),
    endTime: new Date(),
    day: "",
    teacher: "",
    subject: "",
  });

  const days = [
    { label: "Select Day", value: "" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
  ];

  const teachers = [
    { label: "Select Teacher", value: "" },
    { label: "Mr. Saim", value: "Mr. Saim" },
    { label: "Ms. Jamila", value: "Ms. Jamila" },
    { label: "Dr. Rauf", value: "Dr. Rauf" },
  ];

  const subjects = [
    { label: "Select Subject", value: "" },
    { label: "Math", value: "Math" },
    { label: "Science", value: "Science" },
    { label: "History", value: "History" },
  ];

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setEntry({ ...entry, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingEntry = entries.find(
      (item) =>
        item.day === entry.day &&
        item.teacher === entry.teacher &&
        ((entry.startTime >= item.startTime &&
          entry.startTime <= item.endTime) ||
          (entry.endTime >= item.startTime && entry.endTime <= item.endTime))
    );

    if (existingEntry) {
      alert("Teacher already has a class at that time.");
      return;
    }

    if (
      entry.day &&
      entry.startTime &&
      entry.endTime &&
      entry.teacher &&
      entry.subject
    ) {
      setEntries((prevEntries) => [...prevEntries, entry]);
      setEntry({
        startTime: new Date(),
        endTime: new Date(),
        day: "",
        teacher: "",
        subject: "",
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="container mx-auto p-10 bg-slate-100">
      <h1 className="text-xl font-bold mb-4">Manage Timetable</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
      >
        <div>
          <label htmlFor="startTime" className="block mb-1">
            Start Time
          </label>
          <DatePicker
            id="startTime"
            selected={entry.startTime}
            onChange={(date) => setEntry({ ...entry, startTime: date })}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="endTime" className="block mb-1">
            End Time
          </label>
          <DatePicker
            id="endTime"
            selected={entry.endTime}
            onChange={(date) => setEntry({ ...entry, endTime: date })}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <Dropdown
          id="day"
          name="day"
          value={entry.day}
          onChange={(e) => handleChange(e, "day")} // Update onChange handler
          options={days}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="teacher"
          name="teacher"
          value={entry.teacher}
          onChange={(e) => handleChange(e, "teacher")} // Update onChange handler
          options={teachers}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="subject"
          name="subject"
          value={entry.subject}
          onChange={(e) => handleChange(e, "subject")} // Update onChange handler
          options={subjects}
          className="w-full mt-1 p-2 border rounded-md"
        />

        <Button
          type="submit"
          className="mt-4 md:col-start-1 md:col-end-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Entry
        </Button>
      </form>

      <h2 className="text-xl font-bold mt-8">Timetable Entries</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className=" bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Time</th>
            {days.slice(1).map((day) => (
              <th key={day.value} className="border border-gray-300 px-4 py-2">
                {day.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {`${entry.startTime.toLocaleTimeString()} - ${entry.endTime.toLocaleTimeString()}`}
              </td>
              {days.slice(1).map((day) => (
                <td
                  key={day.value}
                  className="border border-gray-300 px-4 py-2"
                >
                  {entries
                    .filter(
                      (item) =>
                        item.day === day.value &&
                        item.teacher === entry.teacher &&
                        ((entry.startTime >= item.startTime &&
                          entry.startTime <= item.endTime) ||
                          (entry.endTime >= item.startTime &&
                            entry.endTime <= item.endTime))
                    )
                    .map((item, index) => (
                      <div key={index}>
                        {`${item.teacher} - ${item.subject}`}
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableFormAndTable;
