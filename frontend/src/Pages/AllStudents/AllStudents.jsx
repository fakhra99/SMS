import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ActionIcons from '../../Components/ActionIcons/ActionIcon';
import Checkbox from '../../Components/CheckBoxes/CheckBoxes';
 // Import your Checkbox component

const AllStudents = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [students, setStudents] = useState([
    // Add some initial dummy student data here
    {
      id: 1,
      checkbox: false, // Checkbox state for each student
      image: '', // Replace with image URL or path
      name: 'John Doe',
      dateOfBirth: new Date('1999-05-15'),
      class: 'A',
      section: '1',
      grNumber: 'GR1234',
      rollNumber: 'R001',
      gender: 'Male',
      admissionDate: '2022-01-01',
      guardianEmail: 'john@example.com',
      guardianName: 'John Smith', // Replace with guardian name
      guardianMobile: '+1234567890',
      guardianGender: 'Male', // Replace with guardian gender
    },
  ]);

  const handleCheckboxChange = (studentId) => {
    setStudents(
      students.map((student) =>
        student.id === studentId ? { ...student, checkbox: !student.checkbox } : student
      )
    );
  };
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setStudents(students.map((student) => ({ ...student, checkbox: !selectAll })));
  };

  const handleInputChange = (event, studentId) => {
    const {name, value } = event.target;
    setStudents(
      students.map((student) =>
        student.id === studentId ? { ...student, [name]: value } : student
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>

      <table className="w-full shadow-md rounded overflow-hidden mx-auto sm:w-full lg:w-3/4">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="p-2 w-4">
            <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
            </th>
            <th className="p-2">SNo</th>
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Date of Birth</th>
            <th className="p-2">Class</th>
            <th className="p-2">Section</th>
            <th className="p-2">GR Number</th>
            <th className="p-2">Roll Number</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Admission Date</th>
            <th className="p-2">Guardian Email</th>
            <th className="p-2">Guardian Name</th>
            <th className="p-2">Guardian Mobile</th>
            <th className="p-2">Guardian Gender</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="p-2 w-4">
                <Checkbox
                  isChecked={student.checkbox}
                  onChange={() => handleCheckboxChange(student.id)}
                  label={`checkbox-${student.id}`}
                />
              </td>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">
                <img
                  className="h-10 w-10 rounded-full object-cover mx-auto"
                  src={student.image}
                  alt={student.name}
                  onError={(event) => {
                    event.target.src = 'https://via.placeholder.com/50'; // Placeholder image on error
                  }}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  name="name"
                  value={student.name}
                  onChange={(event) => handleInputChange(event, student.id, 'name')}
                />
              </td>
              <td className="p-2">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  name="dateOfBirth"
                  value={student.dateOfBirth.toISOString().substr(0, 10)} // Convert Date object to ISO string
                  onChange={(event) => handleInputChange(event, student.id, 'dateOfBirth')}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  name="class"
                  value={student.class}
                  onChange={(event) => handleInputChange(event, student.id, 'class')}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  name="section"
                  value={student.section}
                  onChange={(event) => handleInputChange(event, student.id, 'section')}
                />
              </td>
              <td className="p-2">{student.grNumber}</td>
              <td className="p-2">{student.rollNumber}</td>
              <td className="p-2">{student.gender}</td>
              <td className="p-2">{student.admissionDate}</td>
              <td className="p-2">{student.guardianEmail}</td>
              <td className="p-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  name="guardianName"
                  value={student.guardianName}
                  onChange={(event) => handleInputChange(event, student.id, 'guardianName')}
                />
              </td>
              <td className="p-2">
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  name="guardianMobile"
                  value={student.guardianMobile}
                  onChange={(event) => handleInputChange(event, student.id, 'guardianMobile')}
                />
              </td>
              <td className="p-2">{student.guardianGender}</td>
              <td className="p-2">
                <div className="flex">
                  <ActionIcons
                    onEditClick={() => console.log('Edit clicked')} // Replace console.log with your edit functionality
                    onDeleteClick={() => console.log('Delete clicked')} // Replace console.log with your delete functionality
                    disabled={false} // Set disabled based on your logic
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
