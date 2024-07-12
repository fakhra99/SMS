import React, { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import Button from "../../Components/buttons/Buttons.jsx";
import InputField from "../../Components/InputField/InputField";
import jsPDF from "jspdf";
import axios from "axios";

const FeeVoucherForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    studentId: "",
    studentClass: "",
    classSection: "",
    feeVoucherNo: "",
    depositDueDate: "",
    depositedBy: "",
    bankName: "",
    branchCode: "",
    totalTuitionFee: "",
    externalFinancialAssistance: "",
    totalFeeTillDueDate: "",
    fineChargeAfterDueDate: "",
    totalAfterDueDate: "",
    depositDate: "",
    cashierSign: "",
  });

  const [generatedData, setGeneratedData] = useState(null);

  const fetchStudentData = async (studentId) => {
    try {
      const response = await axios.get(`http://localhost:4041/api/getStudent/${studentId}`);
      const { student, tuitionFee } = response.data;
      const externalFinancialAssistance = parseFloat(formData.externalFinancialAssistance) || 0;
      const totalFeeTillDueDate = tuitionFee - externalFinancialAssistance;
      const fineChargeAfterDueDate = parseFloat(formData.fineChargeAfterDueDate) || 0;
      const totalAfterDueDate = totalFeeTillDueDate + fineChargeAfterDueDate;

      setFormData((prevFormData) => ({
        ...prevFormData,
        studentClass: student.Class.className,
        classSection: student.Class.section,
        totalTuitionFee: tuitionFee,
        totalFeeTillDueDate,
        totalAfterDueDate,
      }));
    } catch (error) {
      console.error("Error fetching student data:", error);
      alert("Failed to fetch student data. Please try again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'studentId' && value) {
      fetchStudentData(value);
    } else if (name === 'externalFinancialAssistance' || name === 'fineChargeAfterDueDate') {
      const totalTuitionFee = parseFloat(formData.totalTuitionFee) || 0;
      const externalFinancialAssistance = name === 'externalFinancialAssistance' ? parseFloat(value) || 0 : parseFloat(formData.externalFinancialAssistance) || 0;
      const totalFeeTillDueDate = totalTuitionFee - externalFinancialAssistance;
      const fineChargeAfterDueDate = name === 'fineChargeAfterDueDate' ? parseFloat(value) || 0 : parseFloat(formData.fineChargeAfterDueDate) || 0;
      const totalAfterDueDate = totalFeeTillDueDate + fineChargeAfterDueDate;

      setFormData((prevFormData) => ({
        ...prevFormData,
        totalFeeTillDueDate,
        totalAfterDueDate,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4041/api/fee-vouchers", formData);
      setGeneratedData(response.data);
      generatePDF(response.data);
    } catch (error) {
      console.error("Error creating fee voucher:", error);
      alert("Failed to create fee voucher. Please try again.");
    }
  };

  const generatePDF = (data) => {
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
      <Breadcrumbs pageName="Fee Voucher" />
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
            <Button type="submit" className="">
              Generate
            </Button>
          </div>
        </form>
      </div>
      {generatedData && (
        <div className="mt-8 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Generated Fee Voucher</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Attribute</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(generatedData).map(([key, value]) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{key}</td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <Button onClick={() => generatePDF(generatedData)}>
              Download PDF
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeeVoucherForm;
