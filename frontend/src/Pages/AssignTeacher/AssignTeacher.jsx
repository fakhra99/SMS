import React, { useState } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/buttons/Buttons.jsx';

const AssignTeacherPage = () => {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [assignments, setAssignments] = useState([]);

  const handleSubmit = () => {
    const newAssignment = {
      teacher: selectedTeacher,
      class: selectedClass,
      subject: selectedSubject
    };
    setAssignments([...assignments, newAssignment]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 mt-8">Assign Teacher</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-3">
          <Dropdown
            options={[
              { value: 'teacher1', label: 'Teacher 1' },
              { value: 'teacher2', label: 'Teacher 2' },
              // Add more options dynamically from your backend
            ]}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            value={selectedTeacher}
          />
          <Dropdown
            options={[
              { value: 'class1', label: 'Class 1' },
              { value: 'class2', label: 'Class 2' },
              // Add more options dynamically from your backend
            ]}
            onChange={(e) => setSelectedClass(e.target.value)}
            value={selectedClass}
          />
          <Dropdown
            options={[
              { value: 'subject1', label: 'Subject 1' },
              { value: 'subject2', label: 'Subject 2' },
              // Add more options dynamically from your backend
            ]}
            onChange={(e) => setSelectedSubject(e.target.value)}
            value={selectedSubject}
          />
        </div>
        <div className="flex justify-center ">
          <Button onClick={handleSubmit} className="bg-blue-500 font-bold text-white py-4 px-8 rounded-md">
            Submit
          </Button>
        </div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">SNo</th>
              <th className="px-4 py-2">Assigned Teacher</th>
              <th className="px-4 py-2">Assigned Class</th>
              <th className="px-4 py-2">Assigned Subject</th>
            </tr>
          </thead>
          <tbody>
            {/* Render assignments dynamically */}
            {assignments.map((assignment, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{assignment.teacher}</td>
                <td className="border px-4 py-2">{assignment.class}</td>
                <td className="border px-4 py-2">{assignment.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignTeacherPage;
