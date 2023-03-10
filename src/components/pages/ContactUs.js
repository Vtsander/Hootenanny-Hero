import React, { useState } from 'react';
/*import firebase from 'firebase/app';
import 'firebase/auth';*/
import { useNavigate } from 'react-router-dom';
import '../../assets/css/contactUs.css';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SubmitContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  /*const [password, setPassword] = useState('');*/
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
      alert('Please fill out all fields!');
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailValue)) {
      alert('Please enter a valid email address!');
      return false;
    }

    setSubmitted(true);
  };

  if (submitted) {
    navigate('/ThankYou');

    return (
      <div className="center">
        <h1>Thank You!</h1>
      </div>
    );
  }

  return (
    <div>
        <Navbar />
      <div className="center contact-form-container">
        <form id="contact-form" onSubmit={handleSubmit}>  
          <label>
            Name:
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label class="message">
            Message:
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
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
  );
};

export default SubmitContactForm;