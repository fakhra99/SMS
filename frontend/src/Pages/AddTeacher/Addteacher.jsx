import React, { useState } from "react";
import axios from "axios";
import Button from "../../Components/buttons/Buttons.jsx";
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import InputField from "../../Components/InputField/InputField";
import Dropdown from '../../Components/Dropdown/Dropdown'; 
import Radiobutton from "../../Components/Radiobutton/Radiobutton";

const Addteacher = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName:'',
    Email: '',
    gender: '',
    DoB: '',
    image: null,
    mobileNumber: '',
    qualification: '',
    currentAddress: '',
    permanentAddress: '',
    salary: '',
    status: '', 
  });

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
      image: imageFile,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("First_Name", formData.FirstName);
    formDataToSend.append("Last_Name", formData.LastName);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("Dob", formData.DoB);
    formDataToSend.append("Mobile_No", formData.mobileNumber);
    formDataToSend.append("Qualification", formData.qualification);
    formDataToSend.append("Address", formData.currentAddress);
    formDataToSend.append("Salary", formData.salary);
    formDataToSend.append("Status", formData.status);
    formDataToSend.append("Gender", formData.gender);
    if (formData.image) {
      formDataToSend.append("Image", formData.image);
    }

    console.log('Form data to send:', formDataToSend); // Log form data

    try {
      const response = await axios.post('http://localhost:4041/api/addteacher', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Teacher added successfully:', response.data);
    } catch (error) {
      console.error('Error adding teacher:', error.response);
    }
  };

  return (
    <>
      <Breadcrumbs pageName="AddTeacher"/>
      <div className="max-w-full mx-auto mt-8 p-6 bg-gray-100 rounded-md">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InputField
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            label="First Name:"
          />
          <InputField
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            label="Last Name:"
          />
          <InputField
            type="text"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            label="Email:"
          />
          <InputField
            type="text"
            id="MobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            label="Mobile Number:"
          />
          <div className="col-span-1">
            <label htmlFor="image" className="block">Image</label>
            <div className="flex items-center">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
              <button
                type="button"
                className="ml-2 bg-customBlue text-white py-2 px-4 rounded-md"
              >
                Upload
              </button>
            </div>
          </div>
          <InputField
            type="date"
            id="DoB"
            name="DoB"
            value={formData.DoB}
            onChange={handleChange}
            label="Date Of Birth:"
          />
          <InputField
            type="text"
            id="Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            label="Qualification:"
          />
          <InputField
            type="text"
            id="CurrentAddress"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            label="Current Address:"
          />
          <InputField
            type="text"
            id="PermanentAddress"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            label="Permanent Address:"
          />
          <InputField
            type="text"
            id="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            label="Salary:"
          />
          <div className="flex items-center mt-1">
            <label className="mr-4">Gender:</label>
            <Radiobutton
              name="gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              selectedValue={formData.gender}
              onChange={handleChange}
              className="mr-2"
            />
          </div>
          <div className="w-full mt-5">
            <Dropdown
              id="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                { label: 'Select Status', value: '' },
                { label: 'Active', value: 'Active' },
                { label: 'Inactive', value: 'Inactive' },
                { label: 'Terminated', value: 'Terminated' }
              ]}
            />
          </div>
          <div className="col-span-full mt-4">
            <Button type="submit" className="w-full">Add Teacher</Button>
          </div>
        </form>
      </div>
      <div className="max-w-5xl mt-8 p-6 overflow-x-auto mx-auto bg-gray-100">
        <table className="table-auto divide-y divide-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permanent Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Alex</td>
              <td className="px-6 py-4 whitespace-nowrap">Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap">teacher@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap">Male</td>
              <td className="px-6 py-4 whitespace-nowrap">20-03-1980</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src="https://eschool-saas.wrteam.me/storage/user/6555e7ae7bbca2.864131021700128686.jpg" alt="Teacher" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Bachelor's in English</td>
              <td className="px-6 py-4 whitespace-nowrap">101 Hillside Lane, Harmony Town</td>
              <td className="px-6 py-4 whitespace-nowrap">101 Hillside Lane, Harmony Town</td>
              <td className="px-6 py-4 whitespace-nowrap">50k</td>
              <td className="px-6 py-4 whitespace-nowrap">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Addteacher;
