import React, { useState } from "react";
import axios from "axios";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Button from "../../Components/buttons/Buttons.jsx";
import InputField from "../../Components/InputField/InputField";
import jsPDF from "jspdf";
<<<<<<< HEAD
import axios from "axios";
=======
import { ObjectId } from "bson";
>>>>>>> feeperclass

const FeeVoucherForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    studentClass: "",
    studentId: "",
    section: "",
    branchName: "",
    feeVoucherNo: "",
    depositDue: "",
    depositedBy: "",
    tuitionFeeApril: "",
    externalFinancialAssistance: "",
    totalFeeTillDueDate: "",
    fineChargeAfterDueDate: "",
    totalAfterDueDate: "",
    cashierSign: "",
    discount: "",
  });

  const [formFilled, setFormFilled] = useState(false);
<<<<<<< HEAD
=======
  const [generatedData, setGeneratedData] = useState(null);
>>>>>>> feeperclass

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
<<<<<<< HEAD
  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4041/api/fee-vouchers",
        formData
      );
      console.log("Fee voucher created:", response.data);
    
    } catch (error) {
      console.error("Error creating fee voucher:", error);
    }
  };
=======
    setFormFilled(true);
  };

  const isValidObjectId = (id) => {
    return /^[0-9a-fA-F]{24}$/.test(id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
>>>>>>> feeperclass

    if (!isValidObjectId(formData.studentId)) {
      alert("Invalid Student ID format. Please enter a valid 24-character hexadecimal string.");
      return;
    }

    // Convert numeric and date fields
    const numericFields = [
      "tuitionFeeApril",
      "externalFinancialAssistance",
      "totalFeeTillDueDate",
      "fineChargeAfterDueDate",
      "totalAfterDueDate",
      "discount",
    ];

    const updatedFormData = { ...formData };
    numericFields.forEach(field => {
      updatedFormData[field] = parseFloat(formData[field]) || 0;
    });
    updatedFormData.depositDue = new Date(formData.depositDue);
    updatedFormData.studentId = new ObjectId(formData.studentId);

    try {
      const response = await axios.post("http://localhost:4041/api/fee-vouchers", updatedFormData);
      console.log(response.data);
      alert("Fee voucher created successfully!");
      setGeneratedData(response.data);
    } catch (error) {
      console.error("Error creating fee voucher:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        alert(`An error occurred: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("Request data:", error.request);
        alert("No response received from the server. Please check the server.");
      } else {
        console.error("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  const generateDummyData = () => {
    if (!formFilled) {
      alert("Please fill in all the fields before generating the data.");
      return;
<<<<<<< HEAD
      return;
=======
>>>>>>> feeperclass
    }

    const dummyData = {
      Title: formData.title,
      "Student Class": formData.studentClass,
      "Student ID": formData.studentId,
      Section: formData.section,
      "Branch Name": formData.branchName,
      "Fee Voucher No": formData.feeVoucherNo,
      "Deposit Due": formData.depositDue,
      "Deposited By": formData.depositedBy,
      "Tuition Fee (April 2024)": formData.tuitionFeeApril,
      "External Financial Assistance": formData.externalFinancialAssistance,
      "Total Fee Till Due Date": formData.totalFeeTillDueDate,
      "Fine Charge After Due Date": formData.fineChargeAfterDueDate,
      "Total After Due Date": formData.totalAfterDueDate,
      "Cashier Sign": formData.cashierSign,
      Discount: formData.discount,
<<<<<<< HEAD
      Discount: formData.discount,
=======
>>>>>>> feeperclass
    };
    setGeneratedData(dummyData);
    downloadFeeVoucher(dummyData);
  };

  const downloadFeeVoucher = (data) => {
    const doc = new jsPDF();
    let yPos = 10;
    Object.entries(data).forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 10, yPos);
      yPos += 10;
    });
    doc.save("FeeVoucher.pdf");
  };

  return (
    <>
      <Breadcrumbs pageName="FeeVoucher" />
      <div className="max-w-full mx-auto mt-8 p-6 bg-gray-100 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(formData).map(([key, value]) => (
              <InputField
                key={key}
                type={key === "depositDue" ? "date" : key === "studentId" ? "text" : ["tuitionFeeApril", "externalFinancialAssistance", "totalFeeTillDueDate", "fineChargeAfterDueDate", "totalAfterDueDate", "discount"].includes(key) ? "number" : "text"}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                label={`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
              />
            ))}
          </div>
          <div className="mt-4">
<<<<<<< HEAD
=======
            
>>>>>>> feeperclass
            <Button onClick={generateDummyData} className="ml-4">
              Generate
            </Button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto mx-auto">
        {generatedData && (
          <table className="table-auto divide-gray-50 mt-4 w-full bg-gray-100">
<<<<<<< HEAD
            <thead className="bg-gray-100 ">
=======
            <thead className="bg-gray-100">
>>>>>>> feeperclass
              <tr>
                <th className="px-6 py-3 text-left bg-customBlue text-white text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attribute
                </th>
                <th className="px-6 py-3 text-left bg-customBlue text-white text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(generatedData).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap">{key}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default FeeVoucherForm;
