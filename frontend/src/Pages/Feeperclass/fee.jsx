import React, { useState, useEffect } from "react";
import Button from "../../Components/buttons/Buttons.jsx";
import axios from "axios";

const AssignFee = () => {
  const [classes, setClasses] = useState([]);
  const [classMap, setClassMap] = useState({});
  const [classFees, setClassFees] = useState([]);
  const [classFee, setClassFee] = useState({
    classId: "",
    feeAmount: "",
    feeType: "Monthly",
  });

  useEffect(() => {
    axios
      .get("http://localhost:4041/api/classes")
      .then((response) => {
        const fetchedClasses = response.data;
        const mappedClasses = fetchedClasses.map((cls) => ({
          label: cls.className,
          value: cls._id,
        }));
        const classMap = fetchedClasses.reduce((map, cls) => {
          map[cls._id] = cls.className;
          return map;
        }, {});
        setClasses(mappedClasses);
        setClassMap(classMap);
      })
      .catch((error) => console.error("Error fetching classes:", error));

    axios
      .get("http://localhost:4041/api/Fee")
      .then((response) => setClassFees(response.data))
      .catch((error) => console.error("Error fetching fees:", error));
  }, []);

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setClassFee({ ...classFee, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (classFee.classId && classFee.feeAmount) {
      axios
        .post("http://localhost:4041/api/Fee", classFee)
        .then((response) => {
          setClassFees([...classFees, response.data]);
          setClassFee({
            classId: "",
            feeAmount: "",
            feeType: "Monthly",
          });
          alert("Fee assigned to class successfully");
        })
        .catch((error) => console.error("Error assigning fee:", error));
    } else {
      alert("Please select a class and enter a fee amount");
    }
  };

  return (
    <div className="container mx-auto p-10 bg-slate-100">
      <h1 className="text-xl font-bold mb-4">Fee Assignment</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
      >
        <div>
          <label htmlFor="classId" className="block mb-2">
            Select Class
          </label>
          <select
            id="classId"
            name="classId"
            value={classFee.classId}
            onChange={(e) => handleChange(e, "classId")}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls.value} value={cls.value}>
                {cls.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="feeAmount" className="block mb-2">
            Fee Amount
          </label>
          <input
            id="feeAmount"
            name="feeAmount"
            type="number"
            value={classFee.feeAmount}
            onChange={(e) => handleChange(e, "feeAmount")}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter fee amount"
          />
        </div>
        <div>
          <Button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Assign Fee
          </Button>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-8">Fee Assignment Records</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Class</th>
            <th className="border border-gray-300 px-4 py-2">Fee</th>
          </tr>
        </thead>
        <tbody>
          {classFees.map((assignment, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {assignment.classId.className}{" "}
                {/* Access className directly from the object */}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {assignment.feeAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignFee;
