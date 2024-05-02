import React, { useState } from "react";
import Button from "../../Components/buttons/Buttons.jsx";
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import Input_Field from "../../Components/Input_Field/Input_Field";
import Dropdown from '../../Components/Dropdown/Dropdown'; 



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
    <div className="max-w-full mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input_Field
          type="text"
          id="First Name"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
          label="First Name:"
        />
        <Input_Field
          type="text"
          id="Last Name"
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
          label="Last Name:"
        />
        <Input_Field
          type="text"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          label="Email:"
        />
        <Input_Field
          type="text"
          id="Mobile Number"
          name="MobileNumber"
          value={formData.MobileNumber}
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
        <Input_Field
          type="date"
          id="Dob"
          name="DoB"
          value={formData.DoB}
          onChange={handleChange}
          label="Date Of Birth:"
        />
        <Input_Field
          type="text"
          id="Qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          label="Qualification:"
        />
        <Input_Field
          type="text"
          id="Current Address"
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleChange}
          label="Current Address:"
        />
        <Input_Field
          type="text"
          id="Permanent Address"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          label="Permanent Address:"
        />
    
        <Input_Field
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

        <div  className="w-full mt-5">
        <Dropdown
        id="Status"
        name="status"
        value={formData.classSection}
        onChange={handleChange}
        options={[
          { label: 'Select Status', value: '' },
          { label: 'Active', value: 'A' },
          { label: 'Inactive', value: 'B' },
          { label: 'Terminated', value: 'C' }
        ]}
       

      />
      </div>
      
    
 </form>


 <div>
 <Button onClick={handleClick} className="mt-4">Add Teacher</Button>

</div>
      
      </div>
    
          <div class="max-w-5xl mt-8 p-6 overflow-x-auto mx-auto bg-gray-100">
            <table class="table-auto divide-y divide-gray-500">
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