import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// takes all react components and renders them to the root element in DOM
// renders the App component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
