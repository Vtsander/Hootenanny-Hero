import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

function Login({ onLogin }) {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setEmailOrUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
  };

  return (
    <>
     <Navbar />
      <h2>Login to start planning your next event!</h2>
      <div className="form-container">
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
            <button type="submit">Log In</button>
            <button type="button">
              <Link to="/">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;