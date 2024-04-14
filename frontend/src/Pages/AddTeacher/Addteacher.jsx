import React from "react";

function AddTeacher() {
  return (
    <>
      <div className="max-w-full mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Add Teacher</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input mt-1 block w-full"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input mt-1 block w-full"
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input mt-1 block w-full"
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label className="block text-gray-700">Gender *</label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="male"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="gender"
                  value="female"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="mobile" className="block text-gray-700">
              Mobile *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="form-input mt-1 block w-full"
              placeholder="Enter mobile number"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="dob" className="block text-gray-700">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-input mt-1 block w-full"
              placeholder="Select date of birth"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-input mt-1 block w-full"
              placeholder="Choose image file"
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="qualification" className="block text-gray-700">
              Qualification *
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              className="form-input mt-1 block w-full"
              placeholder="Enter qualification"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="currentAddress" className="block text-gray-700">
              Current Address *
            </label>
            <textarea
              id="currentAddress"
              name="currentAddress"
              className="form-textarea mt-1 block w-full"
              rows="3"
              placeholder="Enter current address"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="permanentAddress" className="block text-gray-700">
              Permanent Address *
            </label>
            <textarea
              id="permanentAddress"
              name="permanentAddress"
              className="form-textarea mt-1 block w-full"
              rows="3"
              placeholder="Enter permanent address"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label htmlFor="salary" className="block text-gray-700">
              Salary *
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              className="form-input mt-1 block w-full"
              placeholder="Enter salary"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <label className="block text-gray-700">Status *</label>
            <select
              name="status"
              id="status"
              className="form-select mt-1 block w-full"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="w-full px-4">
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded"
            >
              Add Teacher
            </button>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="table-auto min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
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

export default AddTeacher;
