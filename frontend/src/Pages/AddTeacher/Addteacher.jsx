import React, { useState, useEffect } from "react";
import axios from "axios";
import FormFields from "../../Components/InputField/InputField";
import Button from "../../Components/buttons/Buttons.jsx";

const Addteacher = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName:'',
    Email: '',
     Dob: '',
     Mobile_No: '',
     Image: '',
     Qualification: '', 
     Course: '',
     Address: '',
    salary: '',
    Courses: '',
    Status: '', 
    Gender: '', 
  });
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch subjects from the API
    const fetchSubjects = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/teacherSubjects"); // Adjust the endpoint as needed
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setError("Failed to fetch subjects. Please try again later.");
      }
    };
    fetchSubjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4041/api/addteacher",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("teacher added successfully:", response.data);
      setFormData({
        FirstName: '',
        LastName:'',
        Email: '',
         Dob: '',
         Mobile_No: '',
         Image: '',
         Qualification: '', 
         Course: '',
         Address: '',
        salary: '',
        Status: '', 
        Gender: '', 
      });
    } catch (error) {
      console.error("Error adding teacher:", error);
      setError("Failed to add teacher. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-lg w-full mt-2"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Teacher Registration
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormFields
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            label="First Name"
          />
          <FormFields
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            label="Last Name"
          />
          <FormFields
            type="text"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            label="Email"
          />
          <FormFields
            type="date"
            id="Dob"
            name="Dob"
            value={formData.Dob}
            onChange={handleChange}
            label="Date of Birth"
          />
          <FormFields
            type="text"
            id=" Mobile_No"
            name=" Mobile_No"
            value={formData. MobileNo}
            onChange={handleChange}
            label=" Mobile No"
          />
          <div className="mb-4">
            <label
              htmlFor="Image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="Image"
              name="Image"
              onChange={handleFileChange}
              className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
            />
          </div>
          <FormFields
            type="text"
            id=" Qualification"
            name=" Qualification"
            value={formData. Qualification}
            onChange={handleChange}
            label=" Qualification"
          />
          <div className="mb-4">
  <label
    htmlFor="Course"
    className="block text-sm font-medium text-gray-700"
  >
    Course
  </label>
  <select
    id="Course"
    name="Course"
    value={formData.course}
    onChange={handleChange}
    className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
    required
  >
    <option value="">Select course</option>
    {courses.map((course) => (
      <option key={course._id} value={course._id}>
        {course.className}
      </option>
    ))}
  </select>
</div>

          <FormFields
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            label="Address"
          />
          <FormFields
            type="number"
            id="Salary"
            name="Salary"
            value={formData.Salary}
            onChange={handleChange}
            label="Salary"
          />
          <div className="mb-4">
            <label
              htmlFor="Salary"
              className="block text-sm font-medium text-gray-700"
            >
             Status
            </label>
            <select
              id="Status"
              name="status"
              value={formData.Status}
              onChange={handleChange}
              className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>
          <FormFields
            type="text"
            id="Gender"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            label="Gender"
          />
          
         
         
         
          
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            type="submit"
            className="w-full md:w-1/3 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Add Teacher
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Addteacher;
