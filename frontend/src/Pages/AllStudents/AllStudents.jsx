import React, { useState, useEffect } from 'react';

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [filter, setFilter] = useState({ classSection: '', sessionYear: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Generate dummy student data
    const dummyStudents = [
      {
        _id: 1,
        studentId: '2021001',
        name: 'John Doe',
        dateOfBirth: new Date('1999-05-15'),
        imageUrl: 'https://via.placeholder.com/50',
        classSection: 'A',
        grNumber: 'GR1234',
        rollNumber: 'R001',
        gender: 'Male',
        admissionDate: '2022-01-01',
        guardianEmail: 'john@example.com',
        guardianMobile: '+1234567890'
      },
      {
        _id: 2,
        studentId: '2021002',
        name: 'Jane Doe',
        dateOfBirth: new Date('2000-08-25'),
        imageUrl: 'https://via.placeholder.com/50',
        classSection: 'B',
        grNumber: 'GR5678',
        rollNumber: 'R002',
        gender: 'Female',
        admissionDate: '2022-01-02',
        guardianEmail: 'jane@example.com',
        guardianMobile: '+1234567891'
      },
      // Add more dummy student objects as needed
    ];

    // Set the dummy student data to the state
    setStudents(dummyStudents);
  }, []);

  const handleCheckboxChange = (studentId) => {
    // Check if the student is already selected
    const isSelected = selectedStudents.includes(studentId);
    
    // If already selected, remove it from selectedStudents, otherwise add it
    setSelectedStudents(isSelected 
      ? selectedStudents.filter(id => id !== studentId) 
      : [...selectedStudents, studentId]);
  };

  const handleEdit = (studentId) => {
    // Handle edit action
    console.log(`Edit student with ID: ${studentId}`);
  };

  const handleInactive = (studentId) => {
    // Handle inactive action
    console.log(`Inactivate student with ID: ${studentId}`);
  };

  const handleDelete = (studentId) => {
    // Handle delete action
    console.log(`Delete student permanently with ID: ${studentId}`);
  };

  const handleClassSectionChange = (event) => {
    setFilter({ ...filter, classSection: event.target.value });
  };

  const handleSessionYearChange = (event) => {
    setFilter({ ...filter, sessionYear: event.target.value });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter students based on selected class section, session year, and search term
  const filteredStudents = students.filter(student => {
    return (
      (!filter.classSection || student.classSection === filter.classSection) &&
      (!filter.sessionYear || student.admissionDate.includes(filter.sessionYear)) &&
      (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       student.classSection.toLowerCase().includes(searchTerm.toLowerCase()) ||
       student.studentId.includes(searchTerm))
    );
  });

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-2xl font-bold mb-4">All Students</h1>
        <div className="flex justify-between mb-4">
          <div className="flex">
            <div className="mr-4">
              <label htmlFor="classSection">Class Section:</label>
              <select
                id="classSection"
                className="ml-2 p-2 border border-gray-400 rounded"
                onChange={handleClassSectionChange}
              >
                <option value="">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                {/* Add more options for class sections as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="sessionYear">Session Year:</label>
              <select
                id="sessionYear"
                className="ml-2 p-2 border border-gray-400 rounded"
                onChange={handleSessionYearChange}
              >
                <option value="">All</option>
                {Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
                {/* Generate options for session years from 2000 to 2024 */}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              className="ml-2 p-2 border border-gray-400 rounded"
              placeholder="Student"
              onChange={handleSearch}
            />
          </div>
        </div>
        <table className="w-full border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Select</th>
              <th className="p-2">Student ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Date of Birth</th>
              <th className="p-2">Image</th>
              <th className="p-2">Class Section</th>
              <th className="p-2">GR Number</th>
              <th className="p-2">Roll Number</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Admission Date</th>
              <th className="p-2">Guardian Email</th>
              <th className="p-2">Guardian Mobile</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id} className="border-b border-gray-400">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student._id)}
                    onChange={() => handleCheckboxChange(student._id)}
                  />
                </td>
                <td className="p-2">{student.studentId}</td>
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.dateOfBirth.toLocaleDateString()}</td>
                <td className="p-2">
                  {student.imageUrl && (
                    <img src={student.imageUrl} alt={student.name} className="w-10 h-10 rounded-full"/>
                  )}
                </td>
                <td className="p-2">{student.classSection}</td>
                <td className="p-2">{student.grNumber}</td>
                <td className="p-2">{student.rollNumber}</td>
                <td className="p-2">{student.gender}</td>
                <td className="p-2">{student.admissionDate}</td>
                <td className="p-2">{student.guardianEmail}</td>
                <td className="p-2">{student.guardianMobile}</td>
                <td className="p-2">
                  <span className="mr-2 cursor-pointer" title="Edit" onClick={() => handleEdit(student._id)}>
                    <i className="fas fa-edit text-blue-500"></i>
                  </span>
                  <span className="mr-2 cursor-pointer" title="Inactive" onClick={() => handleInactive(student._id)}>
                    <i className="fas fa-user-slash text-yellow-500"></i>
                  </span>
                  <span className="cursor-pointer" title="Delete Permanently" onClick={() => handleDelete(student._id)}>
                    <i className="fas fa-trash text-red-500"></i>
                  </span>
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
