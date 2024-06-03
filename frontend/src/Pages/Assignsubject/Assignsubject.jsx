import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Button from "../../Components/buttons/Buttons.jsx";

const Assignsubject = () => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teacherSubjects, setTeacherSubjects] = useState([]);
  const [teacherSubject, setTeacherSubject] = useState({
    teacher: "",
    subject: "",
  });

  // Fetch teachers from the API
  const fetchTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:4041/api/allteachers");
      console.log("Teachers API Response:", response.data);
      const teachersData = response.data.teachersData || [];
      setTeachers(
        teachersData.map((teacher) => ({
          label: `${teacher.First_Name} ${teacher.Last_Name}`,
          value: teacher._id,
        }))
      );
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  // Fetch courses from the API
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:4041/api/coursesData");
      console.log("Courses API Response:", response.data);
      const coursesData = response.data.coursesData || [];
      setCourses(
        coursesData.map((course) => ({
          label: `${course.course_Title} (${course.course_Type})`,
          value: course._id,
        }))
      );
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch teacher subjects from the API
  const fetchTeacherSubjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4041/api/getassign-course"
      );
      console.log("Teacher Subjects API Response:", response.data);
      setTeacherSubjects(response.data.assignments || []);
    } catch (error) {
      console.error("Error fetching teacher subjects:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
    fetchCourses();
    fetchTeacherSubjects();
  }, []);

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setTeacherSubject({ ...teacherSubject, [fieldName]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (teacherSubject.teacher && teacherSubject.subject) {
      try {
        // Send a POST request to the API endpoint
        const response = await axios.post(
          "http://localhost:4041/api/assign-course",
          {
            teacherId: teacherSubject.teacher,
            courseId: teacherSubject.subject,
          }
        );

        // If the response is successful, update the local state
        if (response.status === 200) {
          fetchTeacherSubjects(); // Fetch updated assignments
          setTeacherSubject({
            teacher: "",
            subject: "",
          });
          alert("Course assigned to teacher successfully");
        } else {
          alert("Failed to assign course");
        }
      } catch (error) {
        alert("An error occurred while assigning the course");
        console.error(error);
      }
    } else {
      alert("Please select both teacher and subject");
    }
  };

  return (
    <div className="container mx-auto p-10 bg-slate-100">
      <h1 className="text-xl font-bold mb-4">Subject Assignment</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
      >
        <Dropdown
          id="teacher"
          name="teacher"
          value={teacherSubject.teacher}
          onChange={(e) => handleChange(e, "teacher")}
          options={[{ label: "Select Teacher", value: "" }, ...teachers]}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="subject"
          name="subject"
          value={teacherSubject.subject}
          onChange={(e) => handleChange(e, "subject")}
          options={[{ label: "Select Subject", value: "" }, ...courses]}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <div>
          <Button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Assign Subject
          </Button>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-8">Subject Assignment Records</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Teacher</th>
            <th className="border border-gray-300 px-4 py-2">Subject</th>
          </tr>
        </thead>
        <tbody>
          {teacherSubjects.map((assignment, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {assignment.teacherId &&
                  `${assignment.teacherId.First_Name} ${assignment.teacherId.Last_Name}`}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {assignment.courseId &&
                  `${assignment.courseId.course_Title} (${assignment.courseId.course_Type})`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignsubject;