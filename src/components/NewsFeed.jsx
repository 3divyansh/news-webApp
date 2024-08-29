import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import ArticleCard from './ArticleCard';
import ErrorAlert from './ErrorAlert';
import CategoryFilter from './CategoryFilter';

const NewsFeed = ({ handleNotification }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b9adbcad183b41b1b448fe64e4e98a02`);
        setArticles(response.data.articles);
        setFilteredArticles(response.data.articles);
      } catch (error) {
        setError("Error fetching news articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredArticles(articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setFilteredArticles(articles);
    }
  }, [searchTerm, articles]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className='container mx-auto p-4'>
      <header className='mb-6'>
        <h1 className='text-2xl font-bold text-center'>Top Headlines</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </header>
      <div>
        {paginatedArticles.length > 0 ? (
          paginatedArticles.map((article, index) => (
            <ArticleCard key={index} article={article} handleNotification={handleNotification} />
          ))
        ) : (
          <p className='text-center'>No articles found</p>
        )}
      </div>
      <Pagination
        totalItems={filteredArticles.length}
        itemsPerPage={articlesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsFeed;
