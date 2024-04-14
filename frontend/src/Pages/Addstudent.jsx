import React, { useState } from 'react';

const Addstudent = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    dob: '',
    image: '',
    classSection: '',
    grNumber: '',
    rollNumber: '',
    gender: '',
    admissionDate: '',
    guardianEmail: '',
    guardianName: '',
    guardianMobile: '',
    guardianGender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log(formData);

  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="Dob">Dob</label>
            <input
              type="date"
              id="Dob"
              name="Dob"
              value={formData.Dob}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
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
                className="ml-2 bg-customBlue text-white py-2 px-4 rounded-md "
              >
                Upload
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="classSection">Class Section</label>
            <select
              id="classSection"
              name="classSection"
              value={formData.classSection}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="">Select Class Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              
            </select>
          </div>
          <div>
            <label htmlFor="grNumber">GR Number</label>
            <input
              type="text"
              id="grNumber"
              name="grNumber"
              value={formData.grNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="rollNumber">Roll Number</label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
         
            <div className="flex items-center mt-1">
            <label className='mr-4'>Gender:</label>
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
            <div>
            <label htmlFor="admissionDate">Admission Date</label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="guardianEmail">Guardian's Email</label>
            <input
              type="email"
              id="guardianEmail"
              name="guardianEmail"
              value={formData.guardianEmail}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="guardianName">Guardian's Name</label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="guardianGender">Guardian's Gender</label>
            <select
              id="guardianGender"
              name="guardianGender"
              value={formData.guardianGender}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
             
            </select>
          </div>
          
          <div>
            <label htmlFor="guardianMobile">Guardian's Mobile</label>
            <input
              type="tel"
              id="guardianMobile"
              name="guardianMobile"
              value={formData.guardianMobile}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Action</label>
            <div className="flex items-center mt-1">
              <input
                type="radio"
                id="edit"
                name="action"
                value="edit"
                checked={formData.action === 'edit'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="edit" className="mr-4">Edit</label>
              <input
                type="radio"
                id="inactive"
                name="action"
                value="inactive"
                checked={formData.action === 'inactive'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="inactive" className="mr-4">Inactive</label>
              <input
                type="radio"
                id="permanentDelete"
                name="action"
                value="permanentDelete"
                checked={formData.action === 'permanentDelete'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="permanentDelete">Permanent Delete</label>
            </div>
            </div>
        </div>
        <div className=" mt-4">
          <button type="submit" className="bg-customBlue text-white py-2 px-4 rounded-md ">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addstudent;