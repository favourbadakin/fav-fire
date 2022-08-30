import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import ListBooks from './components/ListBooks';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ListBooks />
  </React.StrictMode>
);
reportWebVitals();
