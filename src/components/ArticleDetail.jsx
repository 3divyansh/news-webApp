import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();

 
  const article = {
    title: `Article ${id} Title`,
    content: `Detailed content for article ${id}...`,
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-gray-700 mt-2">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
