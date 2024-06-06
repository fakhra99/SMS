import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "../../Components/InputField/InputField.jsx";
import RadioButton from "../../Components/Radiobutton/Radiobutton.jsx";
import Button from "../../Components/buttons/Buttons.jsx";
import ActionIcons from "../../Components/ActionIcons/ActionIcon.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    course_code: "",
    title: "",
    courseType: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourseId, setCurrentCourseId] = useState(null);

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

    if (isEditing) {
      // Handle course update
      handleEdit(currentCourseId, {
        course_code: formData.course_code,
        course_Title: formData.title,
        course_Type: formData.courseType,
      });
    } else {
      // Handle course addition
      try {
        const response = await axios.post("http://localhost:4041/api/courseReg", {
          course_code: formData.course_code,
          course_Title: formData.title,
          course_Type: formData.courseType,
        });

        // Update the courses state with the new course
        setCourses([...courses, response.data]);

        // Clear the form fields after submission
        setFormData({
          course_code: "",
          title: "",
          courseType: "",
        });
      } catch (error) {
        console.error("Error adding course:", error);
      }
    }
  };

  const handleEdit = async (courseId, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:4041/api/updateCourse/${courseId}`, updatedData);
      const updatedCourse = response.data.Crs;
      console.log("Updated course data:", updatedCourse); // Debugging line

      setCourses(courses.map(course => (course._id === courseId ? updatedCourse : course)));
      setIsEditing(false);
      setCurrentCourseId(null);
      setFormData({
        course_code: "",
        title: "",
        courseType: "",
      });
    } catch (error) {
      console.error("Error editing course:", error);
    }
  };

  const handleEditClick = (course) => {
    console.log("Editing course:", course); // Log the course data
    setIsEditing(true);
    setCurrentCourseId(course._id);
    setFormData({
      course_code: course.course_code,
      title: course.course_Title,
      courseType: course.course_Type,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentCourseId(null);
    setFormData({
      course_code: "",
      title: "",
      courseType: "",
    });
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
        {/* Add/Edit Course Form */}
        <div className="mx-auto mt-4 p-6 mr-6 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Course" : "Add Course"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                type="text"
                id="course_code"
                name="course_code"
                value={formData.course_code}
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
              <Button>{isEditing ? "Update Course" : "Add Course"}</Button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="ml-4 rounded-md bg-gray-500 text-white px-4 py-2 hover:bg-gray-700"
                >
                  Cancel
                </button>
              )}
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
                    onEditClick={() => handleEditClick(course)}
                    onDeleteClick={() => handleDelete(course._id)}
                    disabled={false}
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
