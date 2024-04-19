// RadioButton.js

import React from 'react';

const RadioButton = ({ options, onChange, selectedValue }) => {
  return (
    <div className="flex flex-row">
      {options.map(option => (
        <label key={option.value} className="inline-flex items-center mt-2 ml-4">
          <input
            type="radio"
            className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-300"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
