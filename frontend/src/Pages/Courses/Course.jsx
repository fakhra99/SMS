import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "../../Components/InputField/InputField.jsx";
import RadioButton from "../../Components/Radiobutton/Radiobutton.jsx";
import Button from "../../Components/buttons/Buttons.jsx.jsx";
import ActionIcons from "../../Components/ActionIcons/ActionIcon.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    course_code: "",
    codez: "",
    courseType: "",
  });

  const courseOptions = [
    { label: "Theory", value: "Theory" },
    { label: "Practical", value: "Practical" },
  ];

  useEffect(() => {
    // Fetch courses data from backend
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/coursesData");
        setCourses(response.data.coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4041/api/courseReg", {
        course_code: formData.code,
        course_Title: formData.title,
        course_Type: formData.courseType,
      });

      // Update the courses state with the new course
      setCourses([...courses, response.data]);

      // Clear the form fields after submission
      setFormData({
        title: "",
        code: "",
        courseType: "",
      });
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleEdit = async (courseId, updatedData) => {
    try {
      console.log("Initiating edit for courseId:", courseId);
      console.log("Updated data being sent:", updatedData);
  
      // Make the PUT request
      const response = await axios.put(`http://localhost:4041/api/updateCourse/${courseId}`, updatedData);
      
      // Log the entire response for debugging
      console.log("Full response from API:", response);
  
      // Check if response data contains the updated course
      if (response.data && response.data.Crs) {
        const updatedCourse = response.data.Crs;
  
        // Verify the updatedCourse structure
        console.log("Updated course received:", updatedCourse);
  
        // Update the courses state
        setCourses(courses.map(course => (course._id === courseId ? updatedCourse : course)));
  
        console.log("Courses updated successfully");
      } else {
        console.error("Unexpected response structure:", response.data);
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error("Error response from API:", error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Something else happened
        console.error("Error editing course:", error.message);
      }
    }
  };
  
  
  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:4041/api/delCourse/${courseId}`);
      setCourses(courses.filter(course => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="container mx-auto px-4 py-2">
        {/* Add Course Form */}
        <div className="mx-auto mt-4 p-6 mr-6 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Add Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                label="Course Code"
              />

              <InputField
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
                <td className="p-2">{course.course_code}</td>
                <td className="p-2">{course.course_Title}</td>
                <td className="p-2">{course.course_Type}</td>
                <td className="p-2">
                  <ActionIcons
                    id={course._id}
                    onEditClick={() => handleEdit(course._id, { course_code: course.course_code, course_Title: course.course_Title, course_Type: course.course_Type })}
                    onDeleteClick={() => handleDelete(course._id)}
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
