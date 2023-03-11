import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import CreateAccount from './CreateAccount';
/*import hhlogin1 from '../../assets/images/hhlogin1.png';*/
import Navbar from './navbar';
import auth from '../utils/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';

function Login() {
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
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailOrUsername, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
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
            <button type="submit" onClick={login}>Log In</button>
            <button type="button">
              <Link to="/">Cancel</Link>
            </button>
          </div>  
          <div className="create-profile-link">
  <Link to="/login/CreateAccount">Create a Profile</Link>        
  <CreateAccount />
</div>

        </form>
      </div>
      <footer className="footer">
        <div className="social-icons">
        <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link to="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to="https://www.snapchat.com"><FontAwesomeIcon icon={faSnapchat} /></Link>
        </div>
      </footer>
    </>
  );
}

export default Login;
