import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionIcons from "../../Components/ActionIcons/ActionIcon";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [editingClass, setEditingClass] = useState(null);
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
    setEditingClass(classItem._id);
    setNewClassName(classItem.className);
    setNewSection(classItem.section);
  };

  const handleEditSave = async (classId) => {
    try {
      console.log("Saving changes for:", classId);
      const response = await axios.put(
        `http://localhost:4041/api/classes/${classId}`,
        {
          className: newClassName,
          section: newSection,
        }
      );
      console.log("API Response:", response.data);

      // Update the state only after a successful API call
      const updatedClasses = classes.map((classItem) => {
        if (classItem._id === classId) {
          return {
            ...classItem,
            className: response.data.className,
            section: response.data.section,
          };
        }
        return classItem;
      });

      setClasses(updatedClasses);
      setEditingClass(null);
      setNewClassName("");
      setNewSection("");
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  const handleEditCancel = () => {
    setEditingClass(null);
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
            <th className="border border-gray-300 px-4 py-2">Section</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td className="border border-gray-300 px-4 py-2">
                {editingClass === classItem._id ? (
                  <input
                    type="text"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                  />
                ) : (
                  classItem.className
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editingClass === classItem._id ? (
                  <input
                    type="text"
                    value={newSection}
                    onChange={(e) => setNewSection(e.target.value)}
                  />
                ) : (
                  classItem.section
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                {editingClass === classItem._id ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditSave(classItem._id)} 
                      className="text-green-500 hover:text-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="text-gray-500 hover:text-gray-700"
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
