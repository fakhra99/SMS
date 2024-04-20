import React from "react";

const FormFields = ({ type, id, name, value, onChange, label }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-500"
      />
    </div>
  );
};

export default FormFields;
