import React, { useState } from "react";
import ActionIcons from "../../Components/ActionIcons/ActionIcon"; 
import Checkbox from "../../Components/CheckBoxes/CheckBoxes";

const AllStudents = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [students, setStudents] = useState([
    //  Dummy student data here
    {
      id: 1,
      checkbox: false, // Checkbox state for each student
      image: "", //  image URL or path
      name: "John Doe",
      dateOfBirth: new Date("1999-05-15"),
      class: "A",
      section: "1",
      grNumber: "GR1234",
      rollNumber: "R001",
      gender: "Male",
      admissionDate: "2022-01-01",
      guardianEmail: "john@example.com",
      guardianName: "John Smith",
      guardianMobile: "+1234567890",
      guardianGender: "Male",
    },
    {
      id: 2,
      checkbox: false,
      image: '',  // image URL or path
      name: 'Essa',
      dateOfBirth: new Date('2001-05-15'),
      class: '1',
      section: 'A',
      grNumber: 'GR1235',
      rollNumber: 'R0012',
      gender: 'Male',
      admissionDate: '2022-01-01',
      guardianEmail: 'essa@example.com',
      guardianName: 'Essa Khan',
      guardianMobile: '+1234567890',
      guardianGender: 'Male',
    },
    // {
    //   id: 3,
    //   checkbox: false,
    //   image: '', // image URL or path
    //   name: 'Karishma ',
    //   dateOfBirth: new Date('2000-12-20'),
    //   class: '2',
    //   section: 'B',
    //   grNumber: 'GR123456',
    //   rollNumber: 'R0012',
    //   gender: 'Female',
    //   admissionDate: '2021-01-01',
    //   guardianEmail: 'karishma@example.com',
    //   guardianName: 'Bahadur Khan',
    //   guardianMobile: '+1234567890',
    //   guardianGender: 'Male',
    // },
    // {
    //   id: 4,
    //   checkbox: false,
    //   image: '', // image URL or path
    //   name: 'Ali',
    //   dateOfBirth: new Date('2000-10-10'),
    //   class: '2',
    //   section: 'A',
    //   grNumber: 'GR123445',
    //   rollNumber: 'R00123',
    //   gender: 'Male',
    //   admissionDate: '2022-01-01',
    //   guardianEmail: 'ali@example.com',
    //   guardianName: 'Ali Khan',
    //   guardianMobile: '+1234567890',
    //   guardianGender: 'Male',
    // },
    // {
    //   id: 5,
    //   checkbox: false,
    //   image: '', // image URL or path
    //   name: 'Maria',
    //   dateOfBirth: new Date('1998-07-20'),
    //   class: '1',
    //   section: 'B',
    //   grNumber: 'GR12345',
    //   rollNumber: 'R0023',
    //   gender: 'Female',
    //   admissionDate: '2022-01-01',
    //   guardianEmail: 'maria@example.com',
    //   guardianName: 'John Smith',
    //   guardianMobile: '+1234567890',
    //   guardianGender: 'Male',
    // },
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

  const handleInputChange = (event, studentId) => {
    const { name, value } = event.target;
    setStudents(
      students.map((student) =>
        student.id === studentId ? { ...student, [name]: value } : student
      )
    );
  };
 return (
  <div className="ml-4 max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <div className="overflow-x-auto w-3/4">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      <table className="shadow-md rounded   mx-auto ">
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
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="p-2 w-4">
                <Checkbox
                  isChecked={student.checkbox}
                  onChange={() => handleCheckboxChange(student.id)}
                />
              </td>
            
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
             
              <td className="p-2">{student.section}</td>
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
                    onEditClick={() => console.log('Edit clicked')} // Edit functionality
                    onDeleteClick={() => console.log('Delete clicked')} // Delete functionality
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
