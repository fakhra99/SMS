import React, { useState } from 'react';

const Timetable= ({ onSubmit }) => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const [classValue, setClassValue] = useState('');
  const [teacher, setTeacher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ day, time, subject, classValue, teacher });
    setDay('');
    setTime('');
    setSubject('');
    setClassValue('');
    setTeacher('');
  };

  return (
    <div className="flex ">
  <form onSubmit={handleSubmit} className=" max-w-md mx-auto">
    <div className="flex flex-row justify-between mb-4">
      <label htmlFor="day" className="text-sm font-bold mr-4">Day</label>
      <input
        type="text"
        id="day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Enter day (e.g., Monday)"
        required
      />
    </div>
    {/* Repeat the same pattern for other input fields */}
    <div className="flex flex-row justify-between mb-4">
      <label htmlFor="time" className="text-sm font-bold mr-4">Time</label>
      <input
        type="text"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Enter time (e.g., 8:00 AM)"
        required
      />
    </div>
    <div className="flex flex-row justify-between mb-4">
      <label htmlFor="subject" className="text-sm font-bold mr-4">Subject</label>
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Enter subject"
        required
      />
    </div>
    <div className="flex flex-row justify-between mb-4">
      <label htmlFor="classValue" className="text-sm font-bold mr-4">Class</label>
      <input
        type="text"
        id="classValue"
        value={classValue}
        onChange={(e) => setClassValue(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Enter Class"
        required
      />
    </div>
    <div className="flex flex-row justify-between mb-4">
      <label htmlFor="teacher" className="text-sm font-bold mr-4">Teacher</label>
      <input
        type="text"
        id="teacher"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Enter Teacher's Name"
        required
      />
    </div>
    <button type="submit" className="bg-customBlue  text-white font-bold py-2 px-4 rounded">
      Add Schedule
    </button>
  </form>
</div>

  );
};

export default Timetable;
