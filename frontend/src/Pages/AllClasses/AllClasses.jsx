import React, { useState } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/buttons/Buttons.jsx';

const AllClasses = () => {
  const [classData, setClassData] = useState([]);
  const [formData, setFormData] = useState({
    className: '',
    classTeacher: '',
    subjects: '',
    classSchedule: '',
    numOfStudents: '',
    roomNo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy data for demonstration
    const newClassData = {
      className: formData.className,
      classTeacher: formData.classTeacher,
      subjects: formData.subjects,
      classSchedule: formData.classSchedule,
      numOfStudents: formData.numOfStudents,
      roomNo: formData.roomNo
    };
    setClassData([...classData, newClassData]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Classes</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">

            {/* DropDown for ClassName */}
        <div>
            <label htmlFor="className">className</label>
            <Dropdown
              options={[
                { value: 'Class 1', label: 'Class 1' },
                { value: 'Class 2', label: 'Class 2' },
                // Add more options as needed
              ]}
              onChange={(e) => setFormData({ ...formData, className: e.target.value })}
              value={formData.className}
            />
          </div>
          {/* DropDown for ClassTeacher */}
          <div>
            <label htmlFor="classTeacher">classTeacher</label>
            <Dropdown
              options={[
                { value: 'Teacher 1', label: 'Teacher 1' },
                { value: 'Teacher 2', label: 'Teacher 2' },
                // Add more options as needed
              ]}
              onChange={(e) => setFormData({ ...formData, classTeacher: e.target.value })}
              value={formData.classTeacher}
            />
          </div>
          {/* DropDown for subjects */}
          <div>
            <label htmlFor="subjects">Subjects</label>
            <Dropdown
              options={[
                { value: 'math', label: 'Math' },
                { value: 'science', label: 'Science' },
                // Add more options as needed
              ]}
              onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
              value={formData.subjects}
            />
          </div>
          {/* DropDown for classSchedule */}
          <div>
            <label htmlFor="classSchedule">ClassSchedule</label>
            <Dropdown
              options={[
                { value: '9:00 Am to 9:45 Am', label: '9:00 Am to 9:45 Am' },
                { value: '9:45 Am to 10:30 Am', label: '9:45 Am to 10:30 Am' },
                // Add more options as needed
              ]}
              onChange={(e) => setFormData({ ...formData, classSchedule: e.target.value })}
              value={formData.classSchedule}
            />
          </div>
          {/* DropDown for   numOfStudents */}
          <div>
            <label htmlFor="  numOfStudents">  numOfStudents</label>
            <Dropdown
              options={[
                { value: '45', label: '45' },
                { value: '40', label: '40' },
                // Add more options as needed
              ]}
              onChange={(e) => setFormData({ ...formData,   numOfStudents: e.target.value })}
              value={formData.  numOfStudents}
            />
          </div>
          {/* DropDown for   RoomNo */}
          <div>
            <label htmlFor="roomNo">  RoomNo</label>
            <Dropdown
              options={[
                { value: 'Room 210', label: 'Room 210' },
                { value: 'Room 211', label: 'Room 211' },
                // Add more options as needed
              ]}
              onChange={(e) => setFormData({ ...formData,   roomNo: e.target.value })}
              value={formData.roomNo}
            />
          </div>
          
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <table className="table-auto mt-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Class Teacher</th>
            <th className="px-4 py-2">Subjects</th>
            <th className="px-4 py-2">Class Schedule</th>
            <th className="px-4 py-2">No of Students</th>
            <th className="px-4 py-2">RoomNo</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{classItem.className}</td>
              <td className="border px-4 py-2">{classItem.classTeacher}</td>
              <td className="border px-4 py-2">{classItem.subjects}</td>
              <td className="border px-4 py-2">{classItem.classSchedule}</td>
              <td className="border px-4 py-2">{classItem.numOfStudents}</td>
              <td className="border px-4 py-2">{classItem.roomNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClasses;
