import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle';
import UserProfile from './components/UserProfile';
import NewsFeed from './components/NewsFeed';
import Notification from './components/Notification';
import NewArticle from './components/NewArticle'; 

const user = {
  name: 'Radhey',
  username: '@Radhey',
  avatarUrl: 'https://via.placeholder.com/80',
};

const article = {
  title: 'Sample News Article',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  description: 'Lorem ipsum dolor sit amet...',
  source: { name: 'Example Source' },
  publishedAt: '2024-08-29T12:00:00Z',
  id: '1',
  url: '#',
};

function App() {
  const [notification, setNotification] = useState(null);

  const handleNotification = (message) => {
    setNotification({ message });
    setTimeout(() => setNotification(null), 3000); 
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <NewsFeed handleNotification={handleNotification} />
              <NewArticle article={article} />
            </div>
          } 
        />
        <Route path="/profile" element={<UserProfile user={user} />} />
        <Route path="*" element={<div className="text-center mt-4">Page not found</div>} />
      </Routes>
      {notification && (
        <Notification 
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;
