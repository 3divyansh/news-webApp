import React, { useState } from 'react';
import BookmarkButton from './BookmarkButton';
import ShareButton from './ShareButton';
import CommentsSection from './CommentsSection';

const ArticleCard = ({ article }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleReadMore = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className='border-b border-gray-200 py-4 gap-2'>
      <h2 className='text-xl font-semibold'>{article.title}</h2>
      <p className='text-gray-500'>{article.source.name}</p>
      <p className='text-gray-400 text-sm'>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p className='mt-2 text-gray-700'>
        {showFullContent ? article.content : article.description}
      </p>
      <button
        onClick={toggleReadMore}
        className='mt-2 text-blue-500 hover:underline'
      >
        {showFullContent ? 'Show less' : 'Read more'}
      </button>
      <div className='mt-4 gap-2'>
        <BookmarkButton article={article} />
        <ShareButton url={article.url} />
      </div>
      <CommentsSection articleId={article.id} />
    </div>
  );
};

export default ArticleCard;
