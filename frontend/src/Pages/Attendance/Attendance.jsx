import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import styles
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/buttons/Buttons.jsx';

const Attendance = () => {
  const [attendances, setAttendances] = useState([]);
  const [attendance, setAttendance] = useState({
    date: new Date(),
    student: '',
    rollNo: '', // New field for roll number
    status: 'Present',
  });

  const students = [
    { label: 'Select Student', value: '' },
    { label: 'Ghazala', value: 'Ghazala' },
    { label: 'Fakhrah', value: 'Fakhrah' },
    { label: 'Malaika', value: 'Malaika' },
    { label: 'Noorina', value: 'Noorina' },
  ];

  // Dummy roll numbers
  const rollNumbers = [
    { label: 'Select Roll No', value: '' },
    { label: '101', value: '101' },
    { label: '102', value: '102' },
    { label: '103', value: '103' },
    { label: '104', value: '104' },
  ];

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setAttendance({ ...attendance, [fieldName]: value });
  };

  const handleDateChange = (date) => {
    setAttendance({ ...attendance, date });
  };

  const handleClick = () => {
    console.log('Button clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (attendance.date && attendance.student && attendance.rollNo && attendance.status) {
      setAttendances((prevAttendances) => [...prevAttendances, attendance]);
      setAttendance({
        date: new Date(),
        student: '',
        rollNo: '', // Reset roll number
        status: 'Present',
      });
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className="container mx-auto p-10 bg-slate-100">
      <h1 className="text-xl font-bold mb-4">Student Attendance</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
      >
       
        <div>
          <label htmlFor="date" className="block mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={attendance.date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        
        <Dropdown
          id="rollNo"
          name="rollNo"
          value={attendance.rollNo}
          onChange={(e) => handleChange(e, 'rollNo')}
          options={rollNumbers}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="student"
          name="student"
          value={attendance.student}
          onChange={(e) => handleChange(e, 'student')}
          options={students}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="status"
          name="status"
          value={attendance.status}
          onChange={(e) => handleChange(e, 'status')}
          options={[
            { label: 'Present', value: 'Present' },
            { label: 'Absent', value: 'Absent' },
            { label: 'Leave', value: 'Leave' },
          ]}
          className="w-full mt-1 p-2 border rounded-md"
        />

        <div>
          <Button
            type="submit"
            className="mt-4 md:col-start-1 md:col-end-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Attendance
          </Button>
        </div>
      </form>

      <h2 className="text-xl font-bold mt-8">Attendance Records</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className=" bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2"> Roll No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {attendance.date.toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {attendance.student}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {attendance.rollNo}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {attendance.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
