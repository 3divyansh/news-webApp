import React, { useState } from 'react';
import ArticleCard from './ArticleCard';

const NewArticle = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-4">
      <ArticleCard article={article} />
      <div>
        <p>
          {isExpanded ? article.content : `${article.content.substring(0, 100)}...`}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default NewArticle;
