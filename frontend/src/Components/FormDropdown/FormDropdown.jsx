// Dropdown.jsx
import React from "react";

const Dropdown = ({ id, name, value, onChange, options }) => {
  return (
    <div className="col-span-1">
      <label htmlFor={id} className="block">
        {name}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
