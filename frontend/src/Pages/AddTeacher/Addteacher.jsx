import React, { useState } from "react";
import Button from "../../Components/buttons/Buttons.jsx";
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';



const Addteacher = () => {
  const [formData, setFormData] = useState({
   FirstName: '',
   LastName:'',
   Email: '',
   gender: '',
   DoB: '',
    image: '',
    action: '', 
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

    const handleClick = () => {
      console.log('Button clicked');
    };
 

  return (
    
    <>
    <Breadcrumbs pageName="AddTeacher"/>

        <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
     
        <div onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         
            <div>
              <label htmlFor="name">First Name<span className="text-red-500">*</span>:</label>
              <input
                type="text"
                id="First Name"
                name="First Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="name">Last Name<span className="text-red-500">*</span>:</label>
              <input
                type="text"
                id="Last Name"
                name="Last Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div>
            <label htmlFor="studentId">Email<span className="text-red-500">*</span>:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          

          <div>
          <label htmlFor="Dob">Date Of Birth<span className="text-red-500">*</span>:</label>
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
  <label htmlFor="mobileNumber">Mobile Number<span className="text-red-500">*</span>:</label>
  <input
    type="tel"
    id="mobileNumber"
    name="mobileNumber"
    value={formData.mobileNumber}
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
  <label htmlFor="qualification">Qualification<span className="text-red-500">*</span>:</label>
  <input
    type="text"
    id="qualification"
    name="qualification"
    value={formData.qualification}
    onChange={handleChange}
    className="w-full mt-1 p-2 border rounded-md"
  />
</div>
<div>
  <label htmlFor="currentAddress">Current Address<span className="text-red-500">*</span>:</label>
  <input
    type="text"
    id="currentAddress"y
    name="currentAddress"
    value={formData.currentAddress}
    onChange={handleChange}
    className="w-full mt-1 p-2 border rounded-md"
  />
</div>
<div>
  <label htmlFor="permanentAddress">Permanent Address<span className="text-red-500">*</span>:</label>
  <input
    type="text"
    id="permanentAddress"
    name="permanentAddress"
    value={formData.permanentAddress}
    onChange={handleChange}
    className="w-full mt-1 p-2 border rounded-md"
  />
</div>
<div>
  <label htmlFor="salary">Salary</label>
  <input
    type="text"
    id="salary"
    name="salary"
    value={formData.salary}
    onChange={handleChange}
    className="w-full mt-1 p-2 border rounded-md"
  />
</div>
<div>
  <label htmlFor="status">Status</label>
  <select
    id="status"
    name="status"
    value={formData.status}
    onChange={handleChange}
    className="w-full mt-1 p-2 border rounded-md"
  >
    <option value="">Select Status</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
    <option value="terminated">Terminated</option>
  </select>
</div>
<div className="flex items-center mt-1">
  <label className='mr-4'>Gender</label>
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


 </div>
 </div>
 <div>
 <div>
 <Button onClick={handleClick} className="mt-4">Add Teacher</Button>
 
</div>
 

</div>
      
      </div>
    
          <div class="max-w-4xl mx-auto mt-8 p-6 overflow-x-auto">
            <table class="table-auto min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date of Birth
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qualification
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Address
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Permanent Address
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">teacher@gmail.com</td>
                  <td class="px-6 py-4 whitespace-nowrap">Alex</td>
                  <td class="px-6 py-4 whitespace-nowrap">Johnson</td>
                  <td class="px-6 py-4 whitespace-nowrap">Male</td>
                  <td class="px-6 py-4 whitespace-nowrap">20-03-1980</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <img
                      src="https://eschool-saas.wrteam.me/storage/user/6555e7ae7bbca2.864131021700128686.jpg"
                      alt=""
                    />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">Bachelor's in English</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    101 Hillside Lane, Harmony Town
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    101 Hillside Lane, Harmony Town
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">50k</td>
                  <td class="px-6 py-4 whitespace-nowrap">active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      );
    }
    
    export default Addteacher;