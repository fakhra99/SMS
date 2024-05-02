import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import Button from "../../Components/buttons/Buttons.jsx";
import Input_Field from "../../Components/Input_Field/Input_Field";
import jsPDF from 'jspdf';

const FeeVoucherForm = () => {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [section, setSection] = useState('');
  const [branchName, setBranchName] = useState('');
  const [voucherNo, setVoucherNo] = useState('');
  const [depositDue, setDepositDue] = useState('');
  const [tuitionFeeApril, setTuitionFeeApril] = useState('');
  const [externalAssistance, setExternalAssistance] = useState('');
  const [totalFeeTillDueDate, setTotalFeeTillDueDate] = useState('');
  const [fineChargeAfter, setFineChargeAfter] = useState('');
  const [totalAfterDueDate, setTotalAfterDueDate] = useState('');
  const [depositeBy, setDepositeBy] = useState('');
  const [cashierSign, setCashierSign] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     console.log('Form submitted!');
    
//   };


  const handleClick = () => {
    console.log('Button clicked');
  };

  const [formData, setFormData] = useState({
    title: "",
    code: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log(formData);
  };


    const [generatedData, setGeneratedData] = useState(null);
  
    const generateDummyData = () => {
      const dummyData = {
        Title: "John Doe",
        StudentClass: "10th",
        StudentId: "20240001",
        Section: "A",
        BranchName: "ABC School",
        VoucherNo: "20240001",
        DepositDue: "2024-05-10",
        TuitionFeeApril: "500",
        ExternalAssistance: "100",
        TotalFeeTillDueDate: "600",
        FineChargeAfter: "100",
        TotalAfterDueDate: "600",
        DepositeBy: "John Doe",
        CashierSign: "Alice"
      };
      setGeneratedData(dummyData);
      downloadFeeVoucher(dummyData);
    };
    //pdf form
    const downloadFeeVoucher = (data) => {
      const doc = new jsPDF();
      let yPos = 10;
      Object.entries(data).forEach(([key, value]) => {
        doc.text(`${key}: ${value}`, 10, yPos);
        yPos += 10;
      });
      doc.save('FeeVoucher.pdf');
    };



  return (
    <>
    <Breadcrumbs pageName="FeeVoucher"/>
    <div className="max-w-full mx-auto mt-8 p-6 bg-gray-100 rounded-md">
      
    <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-10 text-bold">
      <Input_Field
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        label="Student Name:"
      />
      <Input_Field
        type="text"
        id="Student Class"
        name="Student Class"
        value={formData.StudentClass}
        onChange={handleChange}
        label="Student Class:"
      />
    </div>
    <div className="grid grid-cols-2 gap-10">
      <Input_Field
        type="text"
        id="studentId"
        name="studentId"
        value={formData.studentId}
        onChange={handleChange}
        label="Student ID:"
      />
      <Input_Field
        type="text"
        id="Section"
        name="Section"
        value={formData.Section}
        onChange={handleChange}
        label="Section:"
      />
    </div>
    <div className="grid grid-cols-2 gap-10 text-bold">
      <Input_Field
        type="text"
        id="Branch Name"
        name="Branch Name"
        value={formData.BranchName}
        onChange={handleChange}
        label="Branch Name:"
      />
      <Input_Field
      type="text"
      id="FeeVoucher No"
      name="FeeVoucher No"
      value={formData.FeeVoucherNo}
      onChange={handleChange}
      label="FeeVoucher No:"
    />
      </div>     

      <div className="grid grid-cols-2 gap-10 text-bold">
      <Input_Field
        type="text"
        id="Deposite Due"
        name="Deposite Due"
        value={formData.DepositeDue}
        onChange={handleChange}
        label="Deposite Due:"
      />
      <Input_Field
      type="text"
      id="Deposited By:"
      name="Deposited By:"
      value={formData.DepositedBy}
      onChange={handleChange}
      label="Deposited By:"
    />
      </div>   
      
      <div className="grid grid-cols-2 gap-10 text-bold">
      <Input_Field
        type="text"
        id="Tuition Fee (April 2024):"
        name="Tuition Fee (April 2024):"
        value={formData.TuitionFee}
        onChange={handleChange}
        label="Tuition Fee (April 2024):"
      />
      <Input_Field
      type="text"
      id="
      External Financial Assistance::"
      name="
      External Financial Assistance"
      value={formData.
        ExternalFinancialAssistance}
      onChange={handleChange}
      label="
      External Financial Assistance:"
    />
      </div> 

      <div className="grid grid-cols-2 gap-10 text-bold">
      <Input_Field
        type="text"
        id="Total Fee Till Due Date:"
        name="Total Fee Till Due Date:"
        value={formData.TotalFee}
        onChange={handleChange}
        label="Total Fee Till Due Date:"
      />
      <Input_Field
      type="text"
      id="
      Fine Charge After Due Date:"
      name="
      Fine Charge After Due Date:"
      value={formData.
        FineChargeAfterDuDate}
      onChange={handleChange}
      label="
      Fine Charge After Due Date:"
    />
      </div> 

      <div className="grid grid-cols-2 gap-10 text-bold">
      <Input_Field
        type="text"
        id="Total After Due Date:"
        name="Total After Due Date:"
        value={formData.TotalAfterDueDate}
        onChange={handleChange}
        label="Total After Due Date:"
      />
      <Input_Field
      type="text"
      id="
      Cashier Sign:"
      name="
      Cashier Sign:"
      value={formData.
        CashierSign}
      onChange={handleChange}
      label="
      Cashier Sign:"
    />
      </div> 
      <div>
      <Button onClick={generateDummyData} className="">Generate</Button>
      
     </div>
  </form>
  </div>
  <div className="w-full overflow-x-auto mx-auto">
  {generatedData && (
    <table className="table-auto divide-y divide-gray-50 mt-4 w-full bg-gray-100">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
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





