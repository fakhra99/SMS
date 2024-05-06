// import React, { useState } from "react";
// import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
// import InputField from "../../Components/InputField/InputField.jsx";
// import RadioButton from "../../Components/Radiobutton/Radiobutton.jsx";
// import Button from "../../Components/buttons/Buttons.jsx.jsx";
// import ActionIcons from "../../Components/ActionIcons/ActionIcon.jsx";
// import Dropdown from "../../Components/Dropdown/Dropdown.jsx";

// const Courses = () => {
//   const [createclasses, setClasses] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     capacity:"",
//     startingon: "",
//     subject:"",
//     endingon: "",
//     classlocation: "",
//     classteacher: "",
//     classType: "",
//   });

//   const courseOptions = [
//     { label: "TheoryClass", value: "Theory" },
//     { label: "PracticalClass", value: "Practical" },
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleRadioButtonChange = (event) => {
//     setFormData({
//       ...formData,
//       courseType: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Create a new course object
//     const newCourse = {
//       number: Date.now(), // Generate a unique ID for the new course (you may need a more robust method for a real application)
//       startingon: formData.startingon,
//       capacity: formData.capacity,
//       classlocation:formData.classlocation,
//       classteacher: formData.classteacher,
//       name: formData.title,
//       endingon: formData.endingon,
//       subject: formData.subject,
//       type: formData.courseType,
//     };
//     // Update the courses state with the new course
//     setClasses([...createclasses, newCourse]);
//     // Clear the form fields after submission
//     setFormData({
//         name: "",
//         number: "",
//         capacity:"",
//         startingon: "",
//         endingon: "",
//         subject:"",
//         classlocation: "",
//         classteacher: "",
//         classType: "",
//     });
//   };

//   const handleEdit = (courseId) => {
//     console.log(`Edit course with ID: ${courseId}`);
//     // Add logic to handle edit action
//   };

//   const handleDelete = (courseId) => {
//     console.log(`Delete course with ID: ${courseId}`);
//     // Add logic to handle delete action
//   };

//   return (
//     <>
//     <Breadcrumbs pageName="CreateClasses"/>
//     <div className="flex justify-center items-center bg-gray-100">
//       <div className="container mx-auto px-4 py-2">
//         {/* Add Course Form */}
//         <div className="mx-auto mt-4 p-6 mr-6 bg-gray-100 rounded-md">
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               <InputField
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 label="Class Name:"
//               />

//               <InputField
//                 type="number"
//                 id="number"
//                 name="Room number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 label="Room Number:"
//               />
//               <InputField
//                 type="number"
//                 id="capacity"
//                 name="capacity"
//                 value={formData.capacity}
//                 onChange={handleChange}
//                 label="Class capacity:"
//               />
//             </div>
           
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div  className="w-full mt-5">
//             <Dropdown
//             id="ClassTeacher"
//             name="ClassTeacher"
//             value={formData.classSection}
//             onChange={handleChange}
//             options={[
//               { label: 'Class Teacher', value: '' },
//               { label: 'T1', value: 'A' },
//               { label: 'T2', value: 'B' },
//               { label: 'T3', value: 'C' },
//               { label: 'T4', value: 'D' },
//               { label: 'T5', value: 'E' },
//               { label: 'T6', value: 'F' },
//               { label: 'T7', value: 'G' },
//               { label: 'T8', value: 'H'},
//               { label: 'T9', value: 'I' },
//             ]}
//          />
//           </div>

//               <InputField
//                 type="text"
//                 id="startingon"
//                 name="startingon"
//                 value={formData.startingon}
//                 onChange={handleChange}
//                 label="Class startingon:"
//               />
//               <InputField
//                 type="text"
//                 id="endingon"
//                 name="endingon"
//                 value={formData.endingon}
//                 onChange={handleChange}
//                 label="Class endingon:"
//               />

//               <div className="flex items-center mt-1">
//                 <label className="ml-6 font-semibold">Type</label>
//                 <RadioButton
//                   options={courseOptions}
//                   onChange={handleRadioButtonChange}
//                   selectedValue={formData.courseType}
//                 />
//               </div>
              
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div  className="w-full mt-5">
//             <Dropdown
//             id="ClassSubject"
//             name="ClassSubject"
//             value={formData.ClassSubject}
//             onChange={handleChange}
//             options={[
//               { label: 'Class Subject', value: '' },
//               { label: 'BIO', value: 'A' },
//               { label: 'Maths', value: 'B' },
//               { label: 'Chemistry', value: 'C' },
//               { label: 'Physics', value: 'D' },
//               { label: 'English', value: 'E' },
//               { label: 'Urdu', value: 'F' },
//               { label: 'S.S.T', value: 'G' },
//               { label: 'Science', value: 'H'},
//               { label: 'Pakistan Study', value: 'I' },
//               { label: 'Islamiyat', value: 'H'},
//               { label: 'WorldRound Me', value: 'I' },
//             ]}
//          />
//           </div>

//           <div className="container mx-auto">
//           <h1 className="text-2xl font-bold mb-4">Location</h1>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               title="Location Map"
//               className="w-full h-full"
//               loading="lazy"
//               allowFullScreen
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.063716464864!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sYOUR_LOCATION_NAME!5e0!3m2!1sen!2sus!4v1619804918344!5m2!1sen!2sus"
//             >
//             </iframe>
//           </div>
//         </div>
//               <InputField
//                 type="number"
//                 id="capacity"
//                 name="capacity"
//                 value={formData.capacity}
//                 onChange={handleChange}
//                 label="Class capacity:"
//               />
//             </div>
           
//             <div className="mt-4">
//               <Button>Create Classes</Button>
//             </div>
//           </form>
//         </div>
//         {/* All Courses Table */}
//         <h2 className="text-xl font-semibold p-6">Courses</h2>
//         <table className="w-full border border-gray-400">
//           <thead>
//             <tr className="bg-customBlue text-white text-left">
//               <th className="p-2">Course Code</th>
//               <th className="p-2">Course Title</th>
//               <th className="p-2">Type</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {createclasses.map((createclasses) => (
//               <tr key={createclasses._id} className="border-b border-gray-400">
//                 <td className="p-2">{createclasses.code}</td>
//                 <td className="p-2">{createclasses.name}</td>
//                 <td className="p-2">{createclasses.type}</td>
//                 <td className="p-2">
//                   <ActionIcons
//                     id={createclasses._id}
//                     onEditClick={handleEdit}
//                     onDeleteClick={handleDelete}
//                     disabled={false} // You can set conditions based on the course data
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// };

import React, { useState } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown.jsx';
import Button from '../../Components/buttons/Buttons.jsx.jsx';
import ActionIcons from "../../Components/ActionIcons/ActionIcon.jsx";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

const Assignstudent = () => {
  const [classGrade, setClassGrade] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState({
    Grade: '',
    studentName: '',
  });

  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    setEnrolledStudents({ ...enrolledStudents, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enrolledStudents.Grade && enrolledStudents.studentName) {
      setClassGrade((prevGrades) => [...prevGrades, enrolledStudents]);
      setEnrolledStudents({
        Grade: '',
        studentName: '',
      });
    } else {
      alert('Please select both grade and student name');
    }
  };

  const handleEdit = (index) => {
    // Placeholder logic for editing a student's grade
    const updatedClassGrade = [...classGrade];
    const newGrade = prompt('Enter the new grade:');
    if (newGrade !== null) {
      updatedClassGrade[index].Grade = newGrade;
      setClassGrade(updatedClassGrade);
    }
  };
  
  
  const handleDelete = (index) => {
    // Implement logic to delete the student at the given index
    console.log(`Deleting student at index: ${index}`);
    const updatedClassGrade = [...classGrade];
    updatedClassGrade.splice(index, 1);
    setClassGrade(updatedClassGrade);
  };
  
  return (
    <>
    <Breadcrumbs pageName="Assign Student" />
    <div className="container mx-auto p-10 bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
      >
        <Dropdown
          id="Grade"
          name="Grade"
          value={enrolledStudents.Grade}
          onChange={(e) => handleChange(e, 'Grade')}
          options={[
            { label: 'Select Grade', value: '' },
            { label: 'Grade 1', value: '1' },
            { label: 'Grade 2', value: '2' },
            { label: 'Grade 3', value: '3' },
            { label: 'Grade 4', value: '4' },
            { label: 'Grade 5', value: '5' },
            { label: 'Grade 6', value: '6' },
            { label: 'Grade 7', value: '7' },
            { label: 'Grade 8', value: '8' },
            { label: 'Grade 9', value: '9' },
            { label: 'Grade 10', value: '10' },
          ]}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <Dropdown
          id="studentName"
          name="studentName"
          value={enrolledStudents.studentName}
          onChange={(e) => handleChange(e, 'studentName')}
          options={[
            { label: 'Enroll student', value: '' },
            { label: 'Noor', value: 'noor' },
            { label: 'Ali', value: 'Ali' },
            { label: 'Karim', value: 'Karim' },
            { label: 'sohail', value: 'sohail' },
            { label: 'John Doe', value: 'John Doe' },
            { label: 'Jane Smith', value: 'Jane Smith' },
            { label: 'Michael Johnson', value: 'Michael Johnson' },
            // Add more students as needed
          ]}
          className="w-full mt-1 p-2 border rounded-md"
        />
        <div>
          <Button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Enroll student
          </Button>
        </div>
      </form>
      <h2 className="text-xl font-bold mt-8">Student Grade Records</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-customBlue text-white">
            <th className="border border-gray-300 px-4 py-2">Enroll Student</th>
            <th className="border border-gray-300 px-4 py-2">Grade</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classGrade.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {student.studentName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.Grade}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                <ActionIcons
                  onEditClick={() => handleEdit(index)}
                  onDeleteClick={() => handleDelete(index)}
                  disabled={false} // You can set conditions based on the course data
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Assignstudent;

