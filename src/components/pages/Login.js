import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './login.css';

function Login({ onLogin }) {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleUsernameChange = (event) => {
    setEmailOrUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCancelClick = () => {
    setShowLoginForm(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (emailOrUsername === 'user' && password === 'password') {
      onLogin(emailOrUsername);
      setShowLoginForm(false);
    } else {
      // handle incorrect login details here
    }
  };

  return (
    <div className="form-container">
      <button onClick={handleLoginClick}>Log In</button>
      {showLoginForm && (
        <div className="overlay">
          <form onSubmit={handleFormSubmit} className="login-form">
            <label>
              Email or Username:
              <input type="text" value={emailOrUsername} onChange={handleUsernameChange} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <div className="button-container">
              <button type="button" onClick={handleCancelClick}>Cancel</button>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;