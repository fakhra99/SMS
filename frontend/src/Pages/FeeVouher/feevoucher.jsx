import React, { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Button from "../../Components/buttons/Buttons.jsx";
import InputField from "../../Components/InputField/InputField";
import jsPDF from "jspdf";
import axios from "axios";

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
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

  const [generatedData, setGeneratedData] = useState(null);

  const generateDummyData = () => {
    if (!formFilled) {
      alert("Please fill in all the fields before generating the data.");
      return;
      return;
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
      Discount: formData.discount,
    };
    setGeneratedData(dummyData);
    downloadFeeVoucher(dummyData);
    setFormData({
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
    setFormFilled(false);
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
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                label={`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
              />
            ))}
          </div>
          <div className="mt-4">
            <Button onClick={generateDummyData} className="ml-4">
              Generate
            </Button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto mx-auto">
        {generatedData && (
          <table className="table-auto divide-gray-50 mt-4 w-full bg-gray-100">
            <thead className="bg-gray-100 ">
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
