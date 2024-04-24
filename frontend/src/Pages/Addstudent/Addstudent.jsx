import React, { useState } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown'; 
import Radiobutton from '../../Components/Radiobutton/Radiobutton'; 
import Input_Field from "../../Components/Input_Field/Input_Field";
import Button from "../../Components/buttons/Buttons.jsx";
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
   
    console.log(formData);

  };
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
  };
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-gray-100 rounded-md ">
      <h2 className="text-xl font-semibold mb-4 mt-8">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div>
            <label htmlFor="studentId">Student ID</label>
            <Input_Field
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
            <Input_Field
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
            <Input_Field
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
            <Input_Field
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
             <Button onClick={handleClick} className="mb-8">upload </Button>
            </div>
          </div>
          <div>
            
            <div>
  <label htmlFor="classSection">Class Section</label>
  <Dropdown
    id="classSection"
    name="classSection"
    value={formData.classSection}
    onChange={handleChange}
    options={[
      { label: 'Select Class Section', value: '' },
      { label: 'Section A', value: 'A' },
      { label: 'Section B', value: 'B' },
      { label: 'Section C', value: 'C' }
    ]}
    className="w-full mt-1 p-2 border rounded-md"
  />
</div>
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
  <Radiobutton
    name="gender"
    options={[
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ]}
    selectedValue={formData.gender}
    onChange={handleChange}
    className="mr-2"
  />
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
  <label htmlFor="classSection">Guardian's gender</label>
  <Dropdown
    id="classSection"
    name="classSection"
    value={formData.classSection}
    onChange={handleChange}
    options={[
      { label: 'Select Guardian gender', value: '' },
      { label: 'Male', value: '' },
      { label: ' Female', value: '' },
      
    ]}
    className="w-full mt-1 p-2 border rounded-md"
  />
</div>
          
          <div>
            <label htmlFor="guardianMobile">Guardian's Mobile</label>
            <input
              type="tel"
              id="guardianMobile"
              name="guardianMobile"
              value={formData.guardianMobile}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md h-auto"
            />
          </div>
          <div>
            <label>Action</label>
          
                <div className="flex items-center mt-1">
  <label className='mr-4'>Action:</label>
  <Radiobutton
    name="gender"
    options={[
      { label: 'Edit', value: 'edit '},
      { label: 'Delete', value: 'delete' }
    ]}
    selectedValue={formData.action}
    onChange={handleChange}
    className="mr-2"
  />
</div>
            </div>
        </div>
        <div mt-16><Button onClick={handleClick} className="mt-16">Add Student </Button></div>
        
      </form>
    </div>
  );
};

export default Addstudent;