import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ActionIcons = ({ onEditClick, onDeleteClick, disabled }) => {
  return (
    <div className="action-icons">
      <button
        type="button"
        disabled={disabled}
        onClick={onEditClick}
        className="rounded-full bg-blue-500 text-white px-2 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaEdit size={10} />
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={onDeleteClick}
        className="rounded-full bg-red-500 text-white px-2 py-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <FaTrash size={10} />
      </button>
    </div>
  );
};

export default ActionIcons;

/*
    {
      id: 1,
      checkbox: false, // Checkbox state for each student
      image: '', // Replace with image URL or path
      name: 'John Doe',
      dateOfBirth: new Date('1999-05-15'),
      class: 'A',
      section: '1',
      grNumber: 'GR1234',
      rollNumber: 'R001',
      gender: 'Male',
      admissionDate: '2022-01-01',
      guardianEmail: 'john@example.com',
      guardianName: 'John Smith', // Replace with guardian name
      guardianMobile: '+1234567890',
      guardianGender: 'Male', // Replace with guardian gender
    },
    {
      id: 12,
      checkbox: false, // Checkbox state for each student
      image: '', // Replace with image URL or path
      name: 'Essa',
      dateOfBirth: new Date('2001-05-15'),
      class: '1',
      section: 'A',
      grNumber: 'GR1235',
      rollNumber: 'R0012',
      gender: 'Male',
      admissionDate: '2022-01-01',
      guardianEmail: 'essa@example.com',
      guardianName: 'Essa Khan', // Replace with guardian name
      guardianMobile: '+1234567890',
      guardianGender: 'Male', // Replace with guardian gender
    },
    {
      id: 3,
      checkbox: false, // Checkbox state for each student
      image: '', // Replace with image URL or path
      name: 'Karishma ',
      dateOfBirth: new Date('2000-12-20'),
      class: '2',
      section: 'B',
      grNumber: 'GR123456',
      rollNumber: 'R0012',
      gender: 'Female',
      admissionDate: '2021-01-01',
      guardianEmail: 'karishma@example.com',
      guardianName: 'Bahadur Khan', // Replace with guardian name
      guardianMobile: '+1234567890',
      guardianGender: 'Male', // Replace with guardian gender
    },
    {
      id: 4,
      checkbox: false, // Checkbox state for each student
      image: '', // Replace with image URL or path
      name: 'Ali',
      dateOfBirth: new Date('2000-10-10'),
      class: '2',
      section: 'A',
      grNumber: 'GR123445',
      rollNumber: 'R00123',
      gender: 'Male',
      admissionDate: '2022-01-01',
      guardianEmail: 'ali@example.com',
      guardianName: 'Ali Khan', // Replace with guardian name
      guardianMobile: '+1234567890',
      guardianGender: 'Male', // Replace with guardian gender
    },
    {
      id: 5,
      checkbox: false, // Checkbox state for each student
      image: '', // Replace with image URL or path
      name: 'Maria',
      dateOfBirth: new Date('1998-07-20'),
      class: '1',
      section: 'B',
      grNumber: 'GR12345',
      rollNumber: 'R0023',
      gender: 'Female',
      admissionDate: '2022-01-01',
      guardianEmail: 'maria@example.com',
      guardianName: 'John Smith', // Replace with guardian name
      guardianMobile: '+1234567890',
      guardianGender: 'Male', // Replace with guardian gender
    },
  ]);
*/