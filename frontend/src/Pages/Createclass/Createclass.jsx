import React, { useState } from "react";
import axios from "axios";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/buttons/Buttons.jsx";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";

const CreateClass = () => {
  const [classData, setClassData] = useState({
    className: "",
    section: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4041/api/classes",
        classData
      );
      alert("Class created successfully");
      setClassData({ className: "", section: "" }); // Reset form fields
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Class already exists");
      } else {
        console.error("Error creating class:", error);
        alert("Failed to create class");
      }
    }
  };

  return (
    <>
      <Breadcrumbs pageName="Create Class" />
      <div className="container mx-auto p-10 bg-slate-100">
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="className"
            label="Class Name:"
            value={classData.className}
            onChange={handleChange}
          />
          <InputField
            type="text"
            name="section"
            label="Section:"
            value={classData.section}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create Class
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateClass;