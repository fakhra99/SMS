
import React from 'react';

const Dropdown = ({ options, onChange, value }) => {
  return (
    <select
      className="block w-full py-2 px-4  rounded bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      onChange={onChange}
      value={value}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
