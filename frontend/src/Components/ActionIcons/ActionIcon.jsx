import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ActionIcons = ({ onEditClick, onDeleteClick, disabled }) => {
  return (
    <div className="action-icons">
      <button
        type="button"
        disabled={disabled}
        onClick={onEditClick}
        className="rounded-full bg-blue-500 text-white px-4 py-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaEdit size={20} />
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={onDeleteClick}
        className="rounded-full bg-red-500 text-white px-4 py-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default ActionIcons;
