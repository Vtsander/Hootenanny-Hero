import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/CreateAccount.css'
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const CreateAccountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    navigate('/congrats');
  };

  return (
    <form onSubmit={handleSubmit}>  
     <Navbar />
      <label>
        Name:
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className="button-container">
        <button type="submit">Submit</button>
        <button type="button">
          <Link to="/">Cancel</Link>
        </button>
      </div>  
    </form>
  );
};

const CreateAccountPage = () => {
  return (
    <>
      <h2>Creating an account is the first step to planning your next event with us!</h2>
      <div className="form-container">
        <div className="login-form">
          <CreateAccountForm />   
      <footer className="footer">
        <div className="social-icons">
        <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link to="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to="https://www.snapchat.com"><FontAwesomeIcon icon={faSnapchat} /></Link>
        </div>
      </footer>
      </div>
      </div>
    </>
  );
};


export default CreateAccountPage;