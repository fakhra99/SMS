import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionIcons from "../../Components/ActionIcons/ActionIcon"; 
import Checkbox from "../../Components/CheckBoxes/CheckBoxes";

const AllStudents = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/allStudents");
        setStudents(response.data.studentsData);
      } catch (error) {
        setError("Error fetching students data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleCheckboxChange = (studentId) => {
    setStudents(
      students.map((student) =>
        student._id === studentId
          ? { ...student, checkbox: !student.checkbox }
          : student
      )
    );
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setStudents(
      students.map((student) => ({ ...student, checkbox: !selectAll }))
    );
  };

  const handleEditClick = (student) => {
    setIsEditing(true);
    setCurrentStudent(student);
  };

  const handleDeleteClick = async (studentId) => {
    try {
      await axios.delete(`http://localhost:4041/api/delStudent/${studentId}`);
      setStudents(students.filter(student => student._id !== studentId));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEditChange = (e) => {
    setCurrentStudent({ ...currentStudent, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4041/api/update/${currentStudent._id}`, currentStudent);
      setStudents(students.map(student => (student._id === currentStudent._id ? response.data.student : student)));
      setIsEditing(false);
      setCurrentStudent(null);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid date" : date.toISOString().substr(0, 10);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="ml-4 max-w-[100%] mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      <div className="overflow-x-auto w-full max-w-[1350px]">
        <h1 className="text-2xl font-bold mb-4">All Students</h1>
        <table className="shadow-md rounded mx-auto table-spacing">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="p-2 w-4">
                <Checkbox isChecked={selectAll} onChange={handleSelectAll} />
              </th>
              <th className="p-2">SNo</th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Date of Birth</th>
              <th className="p-2">Class</th>
              <th className="p-2">Section</th>
              <th className="p-2">GR Number</th>
              <th className="p-2">Roll Number</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Admission Date</th>
              <th className="p-2">Guardian Email</th>
              <th className="p-2">Guardian Name</th>
              <th className="p-2">Guardian Mobile</th>
              <th className="p-2">Guardian Gender</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id} className="hover:bg-gray-100">
                <td className="p-2 w-4">
                  <Checkbox
                    isChecked={student.checkbox || false}
                    onChange={() => handleCheckboxChange(student._id)}
                  />
                </td>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">
                  <img
                    className="h-10 w-10 rounded-full object-cover mx-auto"
                    src={student.Image || 'https://via.placeholder.com/50'}
                    alt={student.Name}
                    onError={(event) => {
                      event.target.src = 'https://via.placeholder.com/50'; // Placeholder image on error
                    }}
                  />
                </td>
                <td className="p-2">{student.Name}</td>
                <td className="p-2">{formatDate(student.Dob)}</td>
                <td className="p-2">{student.ClassSection ? student.ClassSection.slice(0, -1) : ''}</td>
                <td className="p-2">{student.ClassSection ? student.ClassSection.slice(-1) : ''}</td>
                <td className="p-2">{student.GrNumber}</td>
                <td className="p-2">{student.RollNo}</td>
                <td className="p-2">{student.Gender}</td>
                <td className="p-2">{formatDate(student.AdmissionDate)}</td>
                <td className="p-2">{student.GuardiansEmail}</td>
                <td className="p-2">{student.GuardianName}</td>
                <td className="p-2">{student.GuardianMobile}</td>
                <td className="p-2">{student.GuardianGender}</td>
                <td className="p-2">
                  <div className="flex">
                    <ActionIcons
                      onEditClick={() => handleEditClick(student)}
                      onDeleteClick={() => handleDeleteClick(student._id)}
                      disabled={false}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && currentStudent && (
        <form onSubmit={handleEditSubmit} className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="Name"
                value={currentStudent.Name}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input
                type="date"
                name="Dob"
                value={formatDate(currentStudent.Dob)}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Class Section:</label>
              <input
                type="text"
                name="ClassSection"
                value={currentStudent.ClassSection}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>GR Number:</label>
              <input
                type="text"
                name="GrNumber"
                value={currentStudent.GrNumber}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Roll Number:</label>
              <input
                type="number"
                name="RollNo"
                value={currentStudent.RollNo}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Gender:</label>
              <input
                type="text"
                name="Gender"
                value={currentStudent.Gender}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Admission Date:</label>
              <input
                type="date"
                name="AdmissionDate"
                value={formatDate(currentStudent.AdmissionDate)}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Guardian's Email:</label>
              <input
                type="email"
                name="GuardiansEmail"
                value={currentStudent.GuardiansEmail}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Guardian's Name:</label>
              <input
                type="text"
                name="GuardianName"
                value={currentStudent.GuardianName}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Guardian's Mobile:</label>
              <input
                type="text"
                name="GuardianMobile"
                value={currentStudent.GuardianMobile}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label>Guardian's Gender:</label>
              <input
                type="text"
                name="GuardianGender"
                value={currentStudent.GuardianGender}
                onChange={handleEditChange}
                className="p-2 border rounded"
              />
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AllStudents;
