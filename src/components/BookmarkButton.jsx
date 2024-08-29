import React from 'react';

const BookmarkButton = ({ article }) => {
  const handleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks = [...bookmarks, article];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    alert('Article bookmarked!');
  };

  return (
    <button 
      onClick={handleBookmark}
      className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600'
    >
      Bookmark
    </button>
  );
};

export default BookmarkButton;
