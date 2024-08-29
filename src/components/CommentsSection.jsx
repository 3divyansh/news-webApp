import React, { useState } from 'react';

const CommentsSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, { id: Date.now(), text: newComment }]);
    setNewComment('');
  };

  return (
    <div className='mt-4'>
      <h2 className='text-lg font-semibold'>Comments</h2>
      <div className='mb-4'>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded-lg'
          placeholder='Add a comment...'
        />
        <button 
          onClick={handleAddComment}
          className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
        >
          Post Comment
        </button>
      </div>
      {comments.map(comment => (
        <div key={comment.id} className='p-2 border-b border-gray-200'>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
