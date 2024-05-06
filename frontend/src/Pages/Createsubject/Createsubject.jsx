import React, { useState } from 'react';
import Button from '../../Components/buttons/Buttons.jsx';

const  Createsubject = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({
    subjectCode: '',
    subjectName: '',
  });

  
  const subjectCodeOptions = [
    { label: '001', value: '001' },
    { label: '002', value: '002' },
    { label: '003', value: '003' },
    { label: '004', value: '004' },
    { label: '005', value: '005' },
    { label: '006', value: '006' },
    { label: '007', value: '007' },
    { label: '008', value: '008' },
    { label: '009', value: '009' },
    { label: '0010', value: '0010' },
    
  ];

  const subjectNameOptions = [
    { label: 'English', value: 'English' },
    { label: 'Urdu', value: 'Urdu' },
    { label: 'Maths', value: 'Maths' },
    { label: 'Islamiat', value: 'Islamiat' },
    { label: 'Science', value: 'Science' },
    { label: 'History', value: 'History' },
    { label: 'Biology', value: 'Biology' },
    { label: 'chemistry', value: 'Chemistry' },
    { label: 'Physics', value: 'Physics' },  
    { label: 'Computer Science', value: 'Computer Science' }, 
    
   
  ];

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setNewSubject({ ...newSubject, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newSubject.subjectCode && newSubject.subjectName) {
      setSubjects((prevSubjects) => [...prevSubjects, newSubject]);
      setNewSubject({
        subjectCode: '',
        subjectName: '',
      });
    } else {
      alert('Please fill out both subject code and subject name');
    }
  };

  return (
    <div className="container mx-auto p-10 bg-slate-100">
      <h1 className="text-xl font-bold mb-4">Subject Creation</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
      >
        <div>
          <select
            id="subjectCode"
            name="subjectCode"
            value={newSubject.subjectCode}
            onChange={(e) => handleChange(e, 'subjectCode')}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select Subject Code</option>
            {subjectCodeOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id="subjectName"
            name="subjectName"
            value={newSubject.subjectName}
            onChange={(e) => handleChange(e, 'subjectName')}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select Subject Name</option>
            {subjectNameOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Create Subject
          </Button>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-8">Subject Records</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Subject Code</th>
            <th className="border border-gray-300 px-4 py-2">Subject Name</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {subject.subjectCode}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {subject.subjectName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Createsubject;
