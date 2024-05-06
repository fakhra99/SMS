import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import ActionIcons from "../../Components/ActionIcons/ActionIcon"; // Action Icons component
import Checkbox from "../../Components/CheckBoxes/CheckBoxes"; // Checkbox component

const AllStudents = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [students, setStudents] = useState([
    //  Can Add more  Dummy student data here
    {
      id: 1,
      checkbox: false, // Checkbox state for each student
      image: "", //  image URL or path
      name: "John Doe",
      dateOfBirth: new Date("1999-05-15"),
      class: "1", // Changed to number
      section: "A", // Changed to alphabet
      grNumber: "GR1234",
      rollNumber: "R001",
      gender: "Male",
      admissionDate: "2022-01-01",
      guardianEmail: "john@example.com",
      guardianName: "John Smith",
      guardianMobile: "+1234567890",
      guardianGender: "Male",
    },
    // Add more students as needed
  ]);

  const handleCheckboxChange = (studentId) => {
    setStudents(
      students.map((student) =>
        student.id === studentId
          ? { ...student, checkbox: !student.checkbox }
          : student
      )
    );
  };
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setStudents(
      students.map((student) => ({ ...student, checkbox: !selectAll }))
    );
  };

  return (
    <div className="ml-4 max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <div className="overflow-x-auto w-3/4">
        <h1 className="text-2xl font-bold mb-4">All Students</h1>
        <table className="shadow-md rounded mx-auto table-spacing">
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
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.dateOfBirth.toISOString().substr(0, 10)}</td>
                <td className="p-2">{student.class}</td>
                <td className="p-2">{student.section}</td>
                <td className="p-2">{student.grNumber}</td>
                <td className="p-2">{student.rollNumber}</td>
                <td className="p-2">{student.gender}</td>
                <td className="p-2">{student.admissionDate}</td>
                <td className="p-2">{student.guardianEmail}</td>
                <td className="p-2">{student.guardianName}</td>
                <td className="p-2">{student.guardianMobile}</td>
                <td className="p-2">{student.guardianGender}</td>
                <td className="p-2">
                  <div className="flex">
                    <ActionIcons
                      onEditClick={() => console.log('Edit clicked')} // This is Edit functionality
                      onDeleteClick={() => console.log('Delete clicked')} //  This is Delete functionality
                      disabled={false}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
