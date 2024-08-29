import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MyProvider } from './components/MyContext';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <MyProvider>
      <App />
    </MyProvider>
  </Router>
);


