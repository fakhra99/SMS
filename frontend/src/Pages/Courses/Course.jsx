import React, { useState } from "react";
import Input_Field from "../../Components/Input_Field/Input_Field.jsx";
import RadioButton from "../../Components/Radiobutton/Radiobutton.jsx";
import Button from "../../Components/buttons/Buttons.jsx.jsx";
import ActionIcons from "../../Components/ActionIcons/ActionIcon.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    courseType: "",
  });

  const courseOptions = [
    { label: "Theory", value: "Theory" },
    { label: "Practical", value: "Practical" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioButtonChange = (event) => {
    setFormData({
      ...formData,
      courseType: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new course object
    const newCourse = {
      _id: Date.now(), // Generate a unique ID for the new course (you may need a more robust method for a real application)
      code: formData.code,
      name: formData.title,
      type: formData.courseType,
    };
    // Update the courses state with the new course
    setCourses([...courses, newCourse]);
    // Clear the form fields after submission
    setFormData({
      title: "",
      code: "",
      courseType: "",
    });
  };

  const handleEdit = (courseId) => {
    console.log(`Edit course with ID: ${courseId}`);
    // Add logic to handle edit action
  };

  const handleDelete = (courseId) => {
    console.log(`Delete course with ID: ${courseId}`);
    // Add logic to handle delete action
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="container mx-auto px-4 py-2">
        {/* Add Course Form */}
        <div className="mx-auto mt-4 p-6 mr-6 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Add Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input_Field
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                label="Course Code"
              />

              <Input_Field
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                label="Course Title"
              />

              <div className="flex items-center mt-1">
                <label className="ml-6 font-semibold">Type</label>
                <RadioButton
                  options={courseOptions}
                  onChange={handleRadioButtonChange}
                  selectedValue={formData.courseType}
                />
              </div>
            </div>
            <div className="mt-4">
              <Button>Add Course</Button>
            </div>
          </form>
        </div>
        {/* All Courses Table */}
        <h2 className="text-xl font-semibold p-6">Courses</h2>
        <table className="w-full border border-gray-400">
          <thead>
            <tr className="bg-customBlue text-white text-left">
              <th className="p-2">Course Code</th>
              <th className="p-2">Course Title</th>
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

export default Courses;
