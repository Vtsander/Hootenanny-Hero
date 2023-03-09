import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/CreateAccount.css'
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const firebaseConfig = {
  apiKey: "AIzaSyAqJkFz1-5jWC1MVnjPCdV0kfLLdkBiSA8",
  authDomain: "hotenanny-hero.firebaseapp.com",
  projectId: "hotenanny-hero",
  storageBucket: "hotenanny-hero.appspot.com",
  messagingSenderId: "1085708570645",
  appId: "1:1085708570645:web:d4dfc4faf1b03ac210be1c"
};

firebase.initializeApp(firebaseConfig);


const CreateAccountForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  //const CreateAccount = () => {
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill out all fields!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/profile');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
 // };

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  
      <button onClick={CreateAccountForm}>Create Account</button>
    </div>
  );
};

const CreateAccountPage = () => {
  return (
    <>
    <Navbar />
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
