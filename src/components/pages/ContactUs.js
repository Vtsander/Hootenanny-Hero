import React, { useState } from 'react';
/*import firebase from 'firebase/app';
import 'firebase/auth';*/
import './contactUs.css';
import Navbar from './navbar';

const SubmitContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  /*const [password, setPassword] = useState('');*/

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

    /*firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        const form = document.getElementById('contact-form');
        form.submit();
      })
      .catch((error) => {
        console.log(error);
      });*/
  };

  return (
    <div className="center contact-form-container">
      <Navbar />
      <form id="contact-form" onSubmit={handleSubmit}>  
        <label>
          Name:
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Message:
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitContactForm;