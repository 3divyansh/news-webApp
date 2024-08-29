import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className='flex justify-center mt-6'>
      {[...Array(totalPages).keys()].map(page => (
        <button
          key={page + 1}
          onClick={() => onPageChange(page + 1)}
          className={`mx-1 px-3 py-1 border rounded-lg ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
