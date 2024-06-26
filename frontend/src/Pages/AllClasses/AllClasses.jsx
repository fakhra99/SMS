import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionIcons from "../../Components/ActionIcons/ActionIcon";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentClassId, setCurrentClassId] = useState(null);
  const [newClassName, setNewClassName] = useState("");
  const [newSection, setNewSection] = useState("");

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:4041/api/classes");
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const handleDelete = async (classId) => {
    try {
      await axios.delete(`http://localhost:4041/api/class/${classId}`);
      setClasses(classes.filter((classItem) => classItem._id !== classId));
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  const handleEditClick = (classItem) => {
    setIsEditing(true);
    setCurrentClassId(classItem._id);
    setNewClassName(classItem.className);
    setNewSection(classItem.section);
  };

  const handleSaveEdit = async () => {
    console.log("Saving edit..."); // Debugging statement
    try {
      const response = await axios.put(
        `http://localhost:4041/api/classes/${currentClassId}`,
        {
          className: newClassName,
          section: newSection,
        }
      );
      console.log("Response from server:", response.data); // Debugging statement
      const updatedClasses = classes.map((classItem) => {
        if (classItem._id === currentClassId) {
          return {
            ...classItem,
            className: response.data.className,
            section: response.data.section,
          };
        }
        return classItem;
      });
      setClasses(updatedClasses);
      setIsEditing(false);
      setCurrentClassId(null);
      setNewClassName("");
      setNewSection("");
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentClassId(null);
    setNewClassName("");
    setNewSection("");
  };

  return (
    <div className="px-8">
      <h2 className="text-xl font-bold mt-6">Classes</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Class Name</th>
            <th className="border border-gray-300 px-4 py-2">Class Section</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {isEditing && currentClassId === classItem._id ? (
                  <input
                    type="text"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1"
                  />
                ) : (
                  classItem.className
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {isEditing && currentClassId === classItem._id ? (
                  <input
                    type="text"
                    value={newSection}
                    onChange={(e) => setNewSection(e.target.value)}
                    className="w-full border border-gray-300 px-2 py-1"
                  />
                ) : (
                  classItem.section
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                {isEditing && currentClassId === classItem._id ? (
                  <div>
                    <button
                      onClick={handleSaveEdit}
                      className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <ActionIcons
                    onEditClick={() => handleEditClick(classItem)}
                    onDeleteClick={() => handleDelete(classItem._id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClasses;
