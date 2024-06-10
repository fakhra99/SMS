import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";
import Button from "../../Components/buttons/Buttons.jsx";
import FormDropdown from "../../Components/FormDropdown/FormDropdown.jsx";
import Timetabledata from "./Timetabledata.jsx";

const TimetableFormAndTable = () => {
  const [entry, setEntry] = useState({
    startTime: new Date(),
    endTime: new Date(),
    day: "",
    teacherId: "",
    courseId: "",
    classId: "", // Add classId field
  });
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]); // Add state for classes

  const days = [
    { label: "Select Day", value: "" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
  ];

  useEffect(() => {
    // Fetch teachers
    Axios.get("http://localhost:4041/api/allteachers")
      .then((response) => {
        if (response.data && Array.isArray(response.data.teachersData)) {
          const fetchedTeachers = response.data.teachersData.map((teacher) => ({
            label: `${teacher.First_Name} ${teacher.Last_Name}`,
            value: teacher._id,
          }));
          setTeachers(fetchedTeachers);
          console.log("Teachers:", fetchedTeachers); // Log fetched teachers
        } else {
          console.error("Teachers data is empty or not an array");
        }
      })
      .catch((error) => console.error("Error fetching teachers:", error));

    // Fetch classes
    Axios.get("http://localhost:4041/api/classes")
      .then((response) => {
        console.log("Classes response:", response.data); // Log entire response
        if (Array.isArray(response.data)) {
          const fetchedClasses = response.data.map((classItem) => ({
            label: `${classItem.className} ${classItem.section}`,
            value: classItem._id,
          }));
          setClasses(fetchedClasses);
          console.log("Classes:", fetchedClasses); // Log fetched classes
        } else {
          console.error("Classes data is empty or not an array");
        }
      })
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  const handleChange = async (e, fieldName) => {
    const { value } = e.target;
    console.log(`Field name: ${fieldName}, Value: ${value}`); // Log field name and value
    setEntry((prevEntry) => ({ ...prevEntry, [fieldName]: value }));

    if (fieldName === "teacherId" && value) {
      try {
        const response = await Axios.get(
          `http://localhost:4041/api/teacherSubjects/${value}`
        );
        let subjectsData = response.data.subjects;

        if (subjectsData && !Array.isArray(subjectsData)) {
          subjectsData = [subjectsData];
        }

        if (subjectsData && Array.isArray(subjectsData)) {
          const fetchedSubjects = subjectsData.map((subject) => ({
            label: subject.course_Title,
            value: subject._id,
          }));
          setSubjects(fetchedSubjects);
          console.log("Subjects for teacher:", fetchedSubjects);
        } else {
          console.error("Subjects data is empty or not an array");
        }
      } catch (error) {
        console.error("Error fetching subjects for teacher:", error);
        alert(
          `Error fetching subjects: ${
            error.response?.data?.message || error.message
          }`
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Entry state before validation:", entry);

    // Log each field explicitly to check if any are empty or not set correctly
    console.log("Day:", entry.day);
    console.log("Start Time:", entry.startTime);
    console.log("End Time:", entry.endTime);
    console.log("Teacher:", entry.teacherId);
    console.log("Subject:", entry.courseId);
    console.log("Class:", entry.classId);

    // Check all fields are filled
    if (
      !entry.day ||
      entry.startTime == null ||
      entry.endTime == null ||
      !entry.teacherId ||
      !entry.courseId ||
      !entry.classId
    ) {
      console.log("Validation failed, empty fields detected.");
      alert("Please fill all the fields.");
    } else {
      console.log("All fields are filled, proceeding with form submission.");
      Axios.post("http://localhost:4041/api/createTimetable", entry)
        .then((response) => {
          console.log("Timetable entry created:", response.data);
          alert("Timetable entry created successfully!");
        })
        .catch((error) => {
          console.error("Error creating timetable entry:", error);
          alert(
            `Error creating timetable entry: ${
              error.response?.data?.message || error.message
            }`
          );
        });
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
            onChange={(date) =>
              setEntry((prevEntry) => ({ ...prevEntry, startTime: date }))
            }
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
            onChange={(date) =>
              setEntry((prevEntry) => ({ ...prevEntry, endTime: date }))
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <FormDropdown
          id="day"
          name="day"
          value={entry.day}
          onChange={(e) => handleChange(e, "day")}
          options={days}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <FormDropdown
          id="teacher"
          name="teacher"
          value={entry.teacherId}
          onChange={(e) => handleChange(e, "teacherId")}
          options={teachers}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <FormDropdown
          id="subject"
          name="subject"
          value={entry.courseId}
          onChange={(e) => handleChange(e, "courseId")}
          options={subjects}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <FormDropdown
          id="class"
          name="class"
          value={entry.classId}
          onChange={(e) => handleChange(e, "classId")}
          options={classes}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Button
          type="submit"
          className="mt-4 md:col-start-1 md:col-end-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Entry
        </Button>
      </form>

      <div>
        <Timetabledata />
      </div>
    </div>
  );
};

export default TimetableFormAndTable;
