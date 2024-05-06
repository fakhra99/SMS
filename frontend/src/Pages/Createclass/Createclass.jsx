import React, { useState } from 'react';
import InputField from "../../Components/InputField/InputField";
import Button from '../../Components/buttons/Buttons.jsx';
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import ActionIcons from "../../Components/ActionIcons/ActionIcon.jsx";

const Assignsubject = () => {
  const [classGrade, setClassGrade] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState({
    Grade: '',
    studentName: '',
  });

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setEnrolledStudents({ ...enrolledStudents, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enrolledStudents.Grade) {
      setClassGrade((prevGrades) => [...prevGrades, enrolledStudents]);
      setEnrolledStudents({
        Grade: '',
        studentName: '',
      });
    } else {
      alert('Please select a grade');
    }
  };

  const handleEdit = (index) => {
    // Placeholder logic for editing a student's grade
    const updatedClassGrade = [...classGrade];
    const newGrade = prompt('Enter the new grade:');
    if (newGrade !== null) {
      updatedClassGrade[index].Grade = newGrade;
      setClassGrade(updatedClassGrade);
    }
  };
  
  const handleDelete = (index) => {
    // Implement logic to delete the student at the given index
    console.log(`Deleting student at index: ${index}`);
    const updatedClassGrade = [...classGrade];
    updatedClassGrade.splice(index, 1);
    setClassGrade(updatedClassGrade);
  };
  
  return (
    <>
      <Breadcrumbs pageName="Create Class" />
      <div className="container mx-auto p-10 bg-slate-100">
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            id="grade"
            name="grade"
            value={enrolledStudents.Grade}
            onChange={(e) => handleChange(e, 'Grade')}
            label="Create Grade:"
          />
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Create Class
            </Button>
          </div>
        </form>
        <h2 className="text-xl font-bold mt-8">Grades </h2>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-customBlue text-white">
              <th className="border border-gray-300 px-4 py-2">Grade</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classGrade.map((student, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Grade}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center">
                  <ActionIcons
                    onEditClick={() => handleEdit(index)}
                    onDeleteClick={() => handleDelete(index)}
                    disabled={false} // You can set conditions based on the course data
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Assignsubject;
