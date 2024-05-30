import React, { useState, useEffect } from "react";
import axios from "axios";
import FormFields from "../../Components/InputField/InputField";
import Button from "../../Components/buttons/Buttons.jsx";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    studentID: "",
    Name: "",
    Dob: "",
    Image: null,
    Class: "",
    GrNumber: "",
    RollNo: "",
    Gender: "",
    AdmissionDate: "",
    GuardiansEmail: "",
    GuardianGender: "",
    GuardianMobile: "",
    Marks: "",
  });
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes from the API
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/classes"); // Adjust the endpoint as needed
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
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
        "http://localhost:4041/api/addStudent",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Student registered successfully:", response.data);
      setFormData({
        studentID: "",
        Name: "",
        Dob: "",
        Image: null,
        Class: "",
        GrNumber: "",
        RollNo: "",
        Gender: "",
        AdmissionDate: "",
        GuardiansEmail: "",
        GuardianGender: "",
        GuardianMobile: "",
        Marks: "",
      });
    } catch (error) {
      console.error("Error registering student:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-lg w-full mt-2"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Registration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormFields
            type="text"
            id="studentID"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            label="Student ID"
          />
          <FormFields
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            label="Name"
          />
          <FormFields
            type="date"
            id="Dob"
            name="Dob"
            value={formData.Dob}
            onChange={handleChange}
            label="Date of Birth"
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
          <div className="mb-4">
            <label
              htmlFor="Class"
              className="block text-sm font-medium text-gray-700"
            >
              Class
            </label>
            <select
              id="Class"
              name="Class"
              value={formData.Class}
              onChange={handleChange}
              className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.className}
                </option>
              ))}
            </select>
          </div>
          <FormFields
            type="number"
            id="GrNumber"
            name="GrNumber"
            value={formData.GrNumber}
            onChange={handleChange}
            label="Gr Number"
          />
          <FormFields
            type="number"
            id="RollNo"
            name="RollNo"
            value={formData.RollNo}
            onChange={handleChange}
            label="Roll No"
          />
          <div className="mb-4">
            <label
              htmlFor="Gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="Gender"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <FormFields
            type="date"
            id="AdmissionDate"
            name="AdmissionDate"
            value={formData.AdmissionDate}
            onChange={handleChange}
            label="Admission Date"
          />
          <FormFields
            type="email"
            id="GuardiansEmail"
            name="GuardiansEmail"
            value={formData.GuardiansEmail}
            onChange={handleChange}
            label="Guardian's Email"
          />
          <div className="mb-4">
            <label
              htmlFor="GuardianGender"
              className="block text-sm font-medium text-gray-700"
            >
              Guardian's Gender
            </label>
            <select
              id="GuardianGender"
              name="GuardianGender"
              value={formData.GuardianGender}
              onChange={handleChange}
              className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
              required
            >
              <option value="">Select Guardian's Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <FormFields
            type="tel"
            id="GuardianMobile"
            name="GuardianMobile"
            value={formData.GuardianMobile}
            onChange={handleChange}
            label="Guardian's Mobile"

          />
          <FormFields
            type="number"
            id="Marks"
            name="Marks"
            value={formData.Marks}
            onChange={handleChange}
            label="Marks"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            type="submit"
            className="w-full md:w-1/3 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Add Student
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistration;
