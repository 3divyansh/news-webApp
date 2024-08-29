import React from 'react';

const ShareButton = ({ url }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  return (
    <button
      onClick={handleShare}
      className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
    >
      Share
    </button>
  );
};

export default ShareButton;
