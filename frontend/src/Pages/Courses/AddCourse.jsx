import React, { useState } from "react";
import Input_Field from "../../Components/Input_Field/Input_Field";
import RadioButton from "../../Components/Radiobutton/Radiobutton"; // Ensure the path matches case-sensitive import

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    courseType: "", // Add this to manage radio button selection
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
    // Add logic to handle form submission
    console.log(formData);
  };

  return (
    <div className="mx-auto mt-8 p-6 ml-6 mr-6 bg-gray-100 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input_Field
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            label="Course Title"
          />
          <Input_Field
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            label="Course Code"
          />

          <div className="flex items-center mt-1">
            <label className="ml-6">Type</label>
            <RadioButton
              options={courseOptions}
              onChange={handleRadioButtonChange}
              selectedValue={formData.courseType}
            />
          </div>
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
