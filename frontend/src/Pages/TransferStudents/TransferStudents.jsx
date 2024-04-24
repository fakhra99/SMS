import React, { useState } from 'react';

const TransferStudents = () => {
  // State variables
  const [existingClass, setExistingClass] = useState('');
  const [transferToClass, setTransferToClass] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', rollNo: '101', marks: 80, transferredTo: '' },
    { id: 2, name: 'Jane Doe', rollNo: '102', marks: 45, transferredTo: '' },
    // Add more dummy student data
  ]);

  // Handle existing class selection
  const handleExistingClassChange = (e) => {
    setExistingClass(e.target.value);
  };

  // Handle transfer to class selection
  const handleTransferToClassChange = (e) => {
    setTransferToClass(e.target.value);
  };

  // Transfer students
  const transferStudents = () => {
    const updatedStudents = students.map((student) => {
      const percentage = (student.marks / 100) * 100; // Assuming marks are out of 100
      let transferredTo = student.transferredTo;
      if (percentage >= 50) {
        transferredTo = getNextClass(existingClass);
      } else {
        transferredTo = existingClass;
      }
      return { ...student, transferredTo };
    });
    setStudents(updatedStudents);
  };

  // Calculate next class based on current class
  const getNextClass = (currentClass) => {
    switch (currentClass) {
      case 'Class 1st':
        return 'Class 2nd';
      case 'Class 2nd':
        return 'Class 3rd';
      case 'Class 3rd':
        return 'Class 4th';
      case 'Class 4th':
        return 'Class 5th';
      default:
        return currentClass;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <label htmlFor="existingClass" className="mr-2">Existing Class:</label>
        <select
          id="existingClass"
          className="border border-gray-300 rounded-md p-2 mr-4"
          value={existingClass}
          onChange={handleExistingClassChange}
        >
          <option value="">Select Existing Class</option>
          <option value="Class 1st">Class 1st</option>
          <option value="Class 2nd">Class 2nd</option>
          <option value="Class 3rd">Class 3rd</option>
          <option value="Class 4th">Class 4th</option>
          <option value="Class 5th">Class 5th</option>
        </select>
        <label htmlFor="transferToClass" className="mr-2">Transfer To Class:</label>
        <select
          id="transferToClass"
          className="border border-gray-300 rounded-md p-2 mr-4"
          value={transferToClass}
          onChange={handleTransferToClassChange}
        >
          <option value="">Select Transfer To Class</option>
          <option value="Class 2nd">Class 2nd</option>
          <option value="Class 3rd">Class 3rd</option>
          <option value="Class 4th">Class 4th</option>
          <option value="Class 5th">Class 5th</option>
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={transferStudents}
        >
          Promote Students
        </button>
      </div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Roll No.</th>
            <th className="border border-gray-300 p-2">Marks</th>
            <th className="border border-gray-300 p-2">Transferred To</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">{student.rollNo}</td>
              <td className="border border-gray-300 p-2">{student.marks}</td>
              <td className="border border-gray-300 p-2">{student.transferredTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransferStudents;
