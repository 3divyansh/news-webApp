import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type='text'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='mt-4 p-2 border border-gray-300 rounded-lg w-full max-w-md mx-auto'
    placeholder='Search articles...'
  />
);

export default SearchBar;
