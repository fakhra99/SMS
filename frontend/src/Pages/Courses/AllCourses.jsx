import React, { useState, useEffect } from "react";
import ActionIcons from "../../Components/ActionIcons/ActionIcon"; // Adjust the import path accordingly
import { FaEdit, FaTrash } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const dummyCourses = [
      {
        _id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        type: "Core",
      },
      {
        _id: 2,
        code: "MATH204",
        name: "Advanced Calculus",
        type: "Elective",
      },
      {
        _id: 3,
        code: "MATH204",
        name: "Advanced Calculus",
        type: "Elective",
      },
      {
        _id: 4,
        code: "MATH204",
        name: "Advanced Calculus",
        type: "Elective",
      },
    ];

    setCourses(dummyCourses);
  }, []);

  const handleEdit = (courseId) => {
    console.log(`Edit course with ID: ${courseId}`);
    // Add logic to handle edit action
  };

  const handleDelete = (courseId) => {
    console.log(`Delete course with ID: ${courseId}`);
    // Add logic to handle delete action
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-md font-bold mb-4">All Courses</h1>
        <table className="w-full border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Course Code</th>
              <th className="p-2">Course Name</th>
              <th className="p-2">Type</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id} className="border-b border-gray-400">
                <td className="p-2">{course.code}</td>
                <td className="p-2">{course.name}</td>
                <td className="p-2">{course.type}</td>
                <td className="p-2">
                  <ActionIcons
                    id={course._id}
                    onEditClick={handleEdit}
                    onDeleteClick={handleDelete}
                    disabled={false} // You can set conditions based on the course data
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCourses;
