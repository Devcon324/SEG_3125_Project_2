import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// import the App component from the App.js file
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// takes all react components and renders them to the root element in DOM
// renders the App component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode is a tool for highlighting potential problems in an application
  // gives you a warning if you use any deprecated methods
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
