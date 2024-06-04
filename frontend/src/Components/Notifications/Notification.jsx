import React, { useEffect } from "react";

const Notification = ({ message, onClose, type = "info", duration = 8000 }) => {
  // Close notification automatically after `duration`
  useEffect(() => {
    const timer =
      duration &&
      setTimeout(() => {
        onClose();
      }, duration);

    return () => clearTimeout(timer); // Cleanup timer
  }, [onClose, duration]);

  // Color coding based on notification type
  const backgroundColor = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  }[type];

  return (
    <div
      className={`fixed bottom-4 right-4 ${backgroundColor} text-white px-4 py-2 rounded shadow-lg flex items-center`}
    >
      {message}
      <button className="ml-4 text-xl" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
