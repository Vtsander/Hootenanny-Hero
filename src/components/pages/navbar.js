import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Login from './Login';

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCancelClick = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/home.js">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/events.js">Events</Link></li>
          <li><Link to="/contactus.js">Contact Us</Link></li>
        </ul>
      </nav>
      <div className={`overlay ${showLoginForm ? 'show' : ''}`} onClick={handleCancelClick}></div>
      {showLoginForm && (
        <div className="login-container">
          <Login onLogin={() => {}} onCancel={handleCancelClick} />
        </div>
      )}
    </>
  );
}

export default Navbar;