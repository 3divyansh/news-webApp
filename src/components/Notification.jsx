import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <p>{message}</p>
      <button onClick={onClose} className="mt-2 text-sm underline">
        Close
      </button>
    </div>
  );
};

export default Notification;
