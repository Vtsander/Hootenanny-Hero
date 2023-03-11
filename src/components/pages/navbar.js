import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import Login from './Login';


function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  /*const handleLoginClick = () => {
    setShowLoginForm(true);
  };*/

  const handleCancelClick = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/events">Event plannings We offer</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
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
