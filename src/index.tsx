import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import http from './utils/https';


http.get('/posts')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

