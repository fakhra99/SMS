import React, { useEffect, useState } from "react";
import axios from "axios";
import ActionIcons from "../../Components/ActionIcons/ActionIcon";
import Notification from "../../Components/Notifications/Notification.jsx"; // Ensure the import path is correct
import EditTeacherForm from "../../Components/EditTeacherForm/EditTeacherForm.jsx";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [editTeacher, setEditTeacher] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/allteachers");
        setTeachers(response.data.teachersData);
      } catch (err) {
        console.error("Error fetching teachers:", err.message);
      }
    };

    fetchTeachers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4041/api/delTeacher/${id}`);
      if (response.status === 200) {
        console.log(`Teacher with id ${id} deleted successfully.`);
        setTeachers(teachers.filter((teacher) => teacher._id !== id));
        setShowSuccessPopup(true); // trigger the notification
      } else {
        console.error("Failed to delete teacher");
      }
    } catch (err) {
      console.error("Error deleting teacher:", err.message);
    }
  };

  const handleEdit = (teacher) => {
    setEditTeacher(teacher);
  };

  const handleSaveEdit = async (updatedTeacher) => {
    try {
      const response = await axios.put(`http://localhost:4041/api/updateTeacher/${updatedTeacher._id}`, updatedTeacher);
      if (response.status === 200) {
        setTeachers(teachers.map((teacher) => (teacher._id === updatedTeacher._id ? updatedTeacher : teacher)));
        setEditTeacher(null);
        setShowSuccessPopup(true); // trigger the notification
      } else {
        console.error("Failed to update teacher");
      }
    } catch (err) {
      console.error("Error updating teacher:", err.message);
    }
  };

  const handleCloseNotification = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div>
      <div className="max-w-5xl mt-8 p-6 overflow-x-auto mx-auto bg-gray-100">
        <table className="table-auto divide-y divide-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Dob</th>
              <th className="px-4 py-2">Mobile Number</th>
              <th className="px-4 py-2">Qualification</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td className="px-4 py-2">
                  <img
                    src={`http://localhost:4041/upload/${teacher.Image}`}
                    alt="Teacher"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{teacher.First_Name}</td>
                <td className="px-4 py-2">{teacher.Last_Name}</td>
                <td className="px-4 py-2">{teacher.Email}</td>
                <td className="px-4 py-2">{teacher.Gender}</td>
                <td className="px-4 py-2">{teacher.Dob}</td>
                <td className="px-4 py-2">{teacher.Mobile_No}</td>
                <td className="px-4 py-2">{teacher.Qualification}</td>
                <td className="px-4 py-2">{teacher.Subject.course_Title}</td>
                <td className="px-4 py-2">{teacher.Address}</td>
                <td className="px-4 py-2">{teacher.Salary}</td>
                <td className="px-4 py-2">{teacher.Status}</td>
                <td className="px-4 py-2">
                  <ActionIcons
                    onEditClick={() => handleEdit(teacher)}
                    onDeleteClick={() => handleDelete(teacher._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showSuccessPopup && (
        <Notification
          message="Teacher deleted successfully!"
          onClose={handleCloseNotification}
          type="success"
          duration={8000}
        />
      )}
      {editTeacher && (
        <EditTeacherForm
          teacher={editTeacher}
          onSave={handleSaveEdit}
          onCancel={() => setEditTeacher(null)}
        />
      )}
    </div>
  );
};

export default AllTeachers;
