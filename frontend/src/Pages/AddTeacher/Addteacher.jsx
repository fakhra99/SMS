import React, { useState, useEffect } from "react";
import Button from "../../Components/buttons/Buttons.jsx";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import InputField from "../../Components/InputField/InputField";
import FormDropdown from "../../Components/FormDropdown/FormDropdown.jsx";

const Addteacher = () => {
  const initialFormData = {
    First_Name: "",
    Last_Name: "",
    Email: "",
    Gender: "",
    Dob: "",
    Image: null,
    Mobile_No: "",
    Qualification: "",
    Address: "",
    Salary: "",
    Status: "",
    Subject: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [subjects, setSubjects] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("http://localhost:4041/api/coursesData");
        const data = await response.json();
        setSubjects(data.coursesData || []);
      } catch (err) {
        console.error("Error fetching subjects:", err.message);
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

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      Image: imageFile,
    });
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   const formDataToSend = new FormData();
   for (const key in formData) {
     formDataToSend.append(key, formData[key]);
   }

   try {
     const response = await fetch("http://localhost:4041/api/addTeacher", {
       method: "POST",
       body: formDataToSend,
     });

     if (response.ok) {
       const result = await response.json();
       console.log("Teacher added:", result);
       setSuccessMessage("Teacher added successfully!");
       setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
       setFormData(initialFormData); // Reset form fields
     } else {
       const error = await response.json();
       console.error("Error adding teacher:", error.message);
       setSuccessMessage(""); // Clear success message
     }
   } catch (err) {
     console.error("Error:", err.message);
     setSuccessMessage(""); // Clear success message
   }
 };


  return (
    <>
      <Breadcrumbs pageName="AddTeacher" />
      <div className="max-w-full mx-auto mt-8 p-6 bg-gray-100 rounded-md">
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            {successMessage}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <InputField
            type="text"
            id="First_Name"
            name="First_Name"
            value={formData.First_Name}
            onChange={handleChange}
            label="First Name:"
          />
          <InputField
            type="text"
            id="Last_Name"
            name="Last_Name"
            value={formData.Last_Name}
            onChange={handleChange}
            label="Last Name:"
          />
          <InputField
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            label="Email:"
          />
          <InputField
            type="text"
            id="Mobile_No"
            name="Mobile_No"
            value={formData.Mobile_No}
            onChange={handleChange}
            label="Mobile Number:"
          />
          <div className="col-span-1">
            <label htmlFor="Image" className="block">
              Image
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="Image"
                name="Image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>
          <InputField
            type="date"
            id="Dob"
            name="Dob"
            value={formData.Dob}
            onChange={handleChange}
            label="Date Of Birth:"
          />
          <InputField
            type="text"
            id="Qualification"
            name="Qualification"
            value={formData.Qualification}
            onChange={handleChange}
            label="Qualification:"
          />
          <InputField
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            label="Address:"
          />
          <InputField
            type="number"
            id="Salary"
            name="Salary"
            value={formData.Salary}
            onChange={handleChange}
            label="Salary:"
          />
          <div className="flex items-center">
            <label className="mr-4 block">Gender</label>
            <input
              type="radio"
              id="Male"
              name="Gender"
              value="Male"
              checked={formData.Gender === "Male"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="Male" className="mr-4">
              Male
            </label>
            <input
              type="radio"
              id="Female"
              name="Gender"
              value="Female"
              checked={formData.Gender === "Female"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="Female">Female</label>
          </div>
          <FormDropdown
            id="Status"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            options={[
              { label: "Select Status", value: "" },
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" },
              { label: "Terminated", value: "Terminated" },
            ]}
          />
          <FormDropdown
            id="Subject"
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            options={[
              { label: "Select Subject", value: "" },
              ...subjects.map((subject) => ({
                label: subject.course_Title,
                value: subject._id,
              })),
            ]}
          />
          <Button type="submit" className="mt-4">
            Add Teacher
          </Button>
        </form>
      </div>
     
    </>
  );
};

export default Addteacher;
