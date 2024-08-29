import React from 'react';

const ErrorAlert = ({ message }) => (
  <div className='text-red-500 text-center p-4 bg-red-100 border border-red-300 rounded-md'>
    <p>{message}</p>
  </div>
);

export default ErrorAlert;
