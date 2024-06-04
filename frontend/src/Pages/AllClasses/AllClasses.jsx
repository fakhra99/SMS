import React, { useState, useEffect } from "react";
import axios from "axios";
import ActionIcons from "../../Components/ActionIcons/ActionIcon";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);

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

  const handleEdit = async (classId, newClassName, newSection) => {
    try {
      const response = await axios.put(
        `http://localhost:4041/api/classes/${classId}`,
        {
          className: newClassName,
          section: newSection,
        }
      );
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
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  return (
    <div className="px-8">
      <h2 className="text-xl font-bold mt-6">Classes</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Class Name</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {classItem.className}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                <ActionIcons
                  onEditClick={() =>
                    handleEdit(classItem._id, "NewClassName", "NewSection")
                  }
                  onDeleteClick={() => handleDelete(classItem._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClasses;
