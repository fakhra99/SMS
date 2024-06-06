import React, { useState } from "react";

const EditTeacherForm = ({ teacher, onSave, onCancel }) => {
  const [formData, setFormData] = useState(teacher);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="First_Name"
              value={formData.First_Name}
              onChange={handleChange}
              placeholder="First Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="Last_Name"
              value={formData.Last_Name}
              onChange={handleChange}
              placeholder="Last Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              placeholder="Gender"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Dob</label>
            <input
              type="date"
              name="Dob"
              value={formData.Dob}
              onChange={handleChange}
              placeholder="Dob"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Mobile No</label>
            <input
              type="tel"
              name="MobileNo"
              value={formData.MobileNo}
              onChange={handleChange}
              placeholder="Mobile No"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Qualification</label>
            <input
              type="text"
              name="Qualification"
              value={formData.Qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="Subject"
              value={formData.Subject}
              onChange={handleChange}
              placeholder="Subject"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              type="number"
              name="Salary"
              value={formData.Salary}
              onChange={handleChange}
              placeholder="Salary"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <input
              type="text"
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              placeholder="Status"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTeacherForm;
