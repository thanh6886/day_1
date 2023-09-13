import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import getApi from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(<h1>{getApi()}</h1>)






reportWebVitals();
