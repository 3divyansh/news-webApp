import React from 'react';

const CategoryFilter = ({ category, setCategory }) => (
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className='mt-4 p-2 border border-gray-300 rounded-lg'
  >
    <option value="general">General</option>
    <option value="business">Business</option>
    <option value="entertainment">Entertainment</option>
    <option value="health">Health</option>
    <option value="science">Science</option>
    <option value="sports">Sports</option>
    <option value="technology">Technology</option>
  </select>
);

export default CategoryFilter;
