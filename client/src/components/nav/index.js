import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import App from './App';

ReactDOM.render(
  <Router>
    <Navbar />
    <App />
  </Router>,
  document.getElementById('root')
);