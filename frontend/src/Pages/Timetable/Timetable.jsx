import React, { useState } from 'react';
import Input_Field from "../../Components/Input_Field/Input_Field";
import Button from "../../Components/buttons/Buttons.jsx";
const TimetableFormAndTable = () => {
  const [time, setTime] = useState('');
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [timetable, setTimetable] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTimetableEntry = {
      time,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday
    };
    setTimetable([...timetable, newTimetableEntry]);
    // Reset form fields after submission
    setTime('');
    setMonday('');
    setTuesday('');
    setWednesday('');
    setThursday('');
    setFriday('');
  };
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Timetable</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="time" className="block font-bold">Time</label>
            <Input_Field type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="monday" className="block font-bold">Monday</label>
            <Input_Field type="text" id="monday" value={monday} onChange={(e) => setMonday(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="tuesday" className="block font-bold">Tuesday</label>
            <Input_Field type="text" id="tuesday" value={tuesday} onChange={(e) => setTuesday(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="wednesday" className="block font-bold">Wednesday</label>
            <Input_Field type="text" id="wednesday" value={wednesday} onChange={(e) => setWednesday(e.target.value)}  />
          </div>
          <div>
            <label htmlFor="thursday" className="block font-bold">Thursday</label>
            <Input_Field type="text" id="thursday" value={thursday} onChange={(e) => setThursday(e.target.value)} />
          </div>
          <div>
            <label htmlFor="friday" className="block font-bold">Friday</label>
            <Input_Field type="text" id="friday" value={friday} onChange={(e) => setFriday(e.target.value)}  />
          </div>
        </div>
        <Button onClick={handleClick} className="mt-4">Add </Button>
      </form>

      <h2 className="text-2xl font-bold mt-8 mb-4">Timetable Entries</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Monday</th>
            <th className="border border-gray-300 px-4 py-2">Tuesday</th>
            <th className="border border-gray-300 px-4 py-2">Wednesday</th>
            <th className="border border-gray-300 px-4 py-2">Thursday</th>
            <th className="border border-gray-300 px-4 py-2">Friday</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{entry.time}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.monday}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.tuesday}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.wednesday}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.thursday}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableFormAndTable;
