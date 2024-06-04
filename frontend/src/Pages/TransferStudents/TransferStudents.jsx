import React, { useState, useEffect } from 'react';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Button from '../../Components/buttons/Buttons.jsx';
import axios from 'axios';

const TransferStudents = () => {
  const [existingClassId, setExistingClassId] = useState('');
  const [transferToClassId, setTransferToClassId] = useState('');
  const [message, setMessage] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes from backend
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:4041/api/classes');
        console.log('Fetched classes:', response.data); // Debugging: log fetched classes
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error); // Log the error
      }
    };

    fetchClasses();
  }, []);

  const handleExistingClassChange = (e) => {
    setExistingClassId(e.target.value);
  };

  const handleTransferToClassChange = (e) => {
    setTransferToClassId(e.target.value);
  };

  const transferStudents = async () => {
    if (!existingClassId || !transferToClassId) {
      setMessage('Both classes must be selected.');
      return;
    }

    console.log(`Promoting students from class ID ${existingClassId} to class ID ${transferToClassId}`);
    
    try {
      const response = await axios.post('http://localhost:4041/api/promote', {
        currentClassId: existingClassId,
        nextClassId: transferToClassId
      });

      const { promoted, notPromotedDueToMarks } = response.data.details;

      setMessage(`Promotion completed: ${promoted} students promoted, ${notPromotedDueToMarks} students not promoted due to marks.`);
    } catch (error) {
      console.error('Error promoting students:', error); // Log the error for debugging
      setMessage('Error promoting students: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="mt-16 mr-2 ml-2">
      <h1 className='font-bold text-xl mb-8'>Promote Students</h1>
      <div className="mb-4 ml-2 mr-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <Dropdown
          options={[
            { value: '', label: 'Select Existing Class' },
            ...classes.map(cls => ({ value: cls._id, label: cls.className }))
          ]}
          value={existingClassId}
          onChange={handleExistingClassChange}
        />

        <Dropdown
          options={[
            { value: '', label: 'Select Transfer To Class' },
            ...classes.map(cls => ({ value: cls._id, label: cls.className }))
          ]}
          value={transferToClassId}
          onChange={handleTransferToClassChange}
        />
        <Button onClick={transferStudents}>Promote Students</Button>
      </div>
      
      {message && <div className="mb-4 text-green-500">{message}</div>}
    </div>
  );
};

export default TransferStudents;
