import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Change ReactDOM.render to createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app inside createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
