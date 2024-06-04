// src/pages/Addteacher/Addteacher.jsx
import React, { useState, useEffect } from 'react';
import Button from '../../Components/buttons/Buttons.jsx';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import InputField from '../../Components/InputField/InputField';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { fetchTeachers, addTeacher } from '../../api'; // Import API service

const Addteacher = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    gender: '',
    DoB: '',
    image: '',
    mobileNumber: '',
    qualification: '',
    currentAddress: '',
    permanentAddress: '',
    salary: '',
    status: '',
  });

  const [teachers, setTeachers] = useState([]); // State to hold teacher data

  useEffect(() => {
    // Fetch teacher data on component mount
    const loadTeachers = async () => {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (error) {
        console.error('Error loading teachers:', error);
      }
    };

    loadTeachers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTeacher(formData);
      // Refresh teacher list after adding a new teacher
      const data = await fetchTeachers();
      setTeachers(data);
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
  };

  return (
    <>
      <Breadcrumbs pageName="AddTeacher" />
      <div className="max-w-full mx-auto mt-8 p-6 bg-gray-100 rounded-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="flex items-center">
            <label className='mr-4 block'>Gender</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="male" className="mr-4">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="female">Female</label>
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
                { label: 'Terminated', value: 'Terminated' },
              ]}
            />
          </div>
        </form>

        <Button onClick={handleSubmit} className="mt-4">Add Teacher</Button>
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
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.First_Name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Last_Name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Dob}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {teacher.Image && <img src={`http://localhost:5000/upload/${teacher.Image}`} alt="Teacher" className="h-10 w-10" />}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Qualification}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Salary}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Addteacher;
