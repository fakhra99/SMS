import React, { useState } from "react";
import FormFields from "../../Components/FormFields/FormFields";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="mx-auto mt-8 p-6 ml-6 mr-6 bg-gray-100 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormFields
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            label="Course Title"
          />
          <FormFields
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            label="Course Code"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
