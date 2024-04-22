import React, { useState, useEffect } from "react";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Generate dummy course data
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
      // Add more dummy course objects as needed
    ];

    // Set the dummy course data to the state
    setCourses(dummyCourses);
  }, []);

  const handleEdit = (courseId) => {
    // Handle edit action
    console.log(`Edit course with ID: ${courseId}`);
  };

  const handleDelete = (courseId) => {
    // Handle delete action
    console.log(`Delete course with ID: ${courseId}`);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-2xl font-bold mb-4">All Courses</h1>
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
                  <span
                    className="mr-2 cursor-pointer"
                    title="Edit"
                    onClick={() => handleEdit(course._id)}
                  >
                    <i className="fas fa-edit text-blue-500"></i>
                  </span>
                  <span
                    className="cursor-pointer"
                    title="Delete"
                    onClick={() => handleDelete(course._id)}
                  >
                    <i className="fas fa-trash text-red-500"></i>
                  </span>
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
