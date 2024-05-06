import React, { useState } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/buttons/Buttons.jsx';

const Assignsubject = () => {
  const [teacherSubjects, setTeacherSubjects] = useState([]);
  const [teacherSubject, setTeacherSubject] = useState({
    teacher: '',
    subject: '',
  });

  const teachers = [
    { label: 'Select Teacher', value: '' },
    { label: 'Hina', value: 'hina' },
    { label: 'Asma', value: 'Asma' },
    { label: 'Ghazala', value: 'Ghazala' },
    { label: 'Malaika', value: 'Malaika' },
    { label: 'Batool', value: 'Batool' },
    { label: 'Fakhrah', value: 'Fakhrah' },
    { label: 'Noorina', value: 'noorina' },
    { label: 'Somi', value: 'Somi' },
    { label: 'Naila', value: 'Naila' },
    { label: 'Farah', value: 'Farah' },
  ];

  const subjects = [
    { label: 'Select Subject', value: '' },
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
    setTeacherSubject({ ...teacherSubject, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (teacherSubject.teacher && teacherSubject.subject) {
      setTeacherSubjects((prevSubjects) => [...prevSubjects, teacherSubject]);
      setTeacherSubject({
        teacher: '',
        subject: '',
      });
    } else {
      alert('Please select both teacher and subject');
    }
  };

  return (
    <div className="container mx-auto p-10 bg-slate-100 ">
      <h1 className="text-xl font-bold mb-4">Subject Assignment</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
      >
        <Dropdown
          id="teacher"
          name="teacher"
          value={teacherSubject.teacher}
          onChange={(e) => handleChange(e, 'teacher')}
          options={teachers}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="subject"
          name="subject"
          value={teacherSubject.subject}
          onChange={(e) => handleChange(e, 'subject')}
          options={subjects}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <div>
          <Button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Assign Subject
          </Button>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-8">Subject Assignment Records</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Teacher</th>
            <th className="border border-gray-300 px-4 py-2">Subject</th>
          </tr>
        </thead>
        <tbody>
          {teacherSubjects.map((teacherSubject, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {teacherSubject.teacher}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {teacherSubject.subject}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignsubject;
