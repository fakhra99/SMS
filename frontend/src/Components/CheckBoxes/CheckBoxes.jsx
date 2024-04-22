import React from "react";

const Checkbox = ({ isChecked, onChange, label }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="w-5 h-5 rounded-full border-gray-900 border-2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
      {label && <label htmlFor={label} className="ml-2 text-gray-700">{label}</label>}
    </div>
  );
};

export default Checkbox;
