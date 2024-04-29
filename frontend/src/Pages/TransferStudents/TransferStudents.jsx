import React, { useState } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/buttons/Buttons.jsx';

const TransferStudents = () => {

  // State variables
  const [existingClass, setExistingClass] = useState('');
  const [transferToClass, setTransferToClass] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', rollNo: '101', marks: 80, transferredTo: '' },
    { id: 2, name: 'Jane Doe', rollNo: '102', marks: 45, transferredTo: '' },
    // Dummy student data
  ]);

  // Handle existing class selection
  const handleExistingClassChange = (e) => {
    setExistingClass(e.target.value);
  };

  // Handle Promote to class selection
  const handleTransferToClassChange = (e) => {
    setTransferToClass(e.target.value);
  };

  // Promote students
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
    <div className="mt-16 mr-2 ml-2">
    <h1 className='font-bold text-xl mb-8'>Promote Students</h1>
      <div className="mb-4 ml-2 mr-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <Dropdown
  options={[
    { value: '', label: 'Select Existing Class' },
    { value: 'Class 1st', label: 'Class 1st' },
    { value: 'Class 2nd', label: 'Class 2nd' },
    { value: 'Class 3rd', label: 'Class 3rd' },
    { value: 'Class 4th', label: 'Class 4th' },
    { value: 'Class 5th', label: 'Class 5th' },
  ]}
  value={existingClass}
  onChange={handleExistingClassChange}
/>

<Dropdown
  options={[
    { value: '', label: 'Select Transfer To Class' },
    { value: 'Class 2nd', label: 'Class 2nd' },
    { value: 'Class 3rd', label: 'Class 3rd' },
    { value: 'Class 4th', label: 'Class 4th' },
    { value: 'Class 5th', label: 'Class 5th' },
  ]}
  value={transferToClass}
  onChange={handleTransferToClassChange}
/>
<Button onClick={transferStudents}>Promote Students</Button>
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
