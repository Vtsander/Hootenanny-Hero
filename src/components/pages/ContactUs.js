import React, { useState } from 'react';

const submitContactForm = () =>  {
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

  const form = document.getElementById('contact-form');
  form.submit();
};

const SubmitContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>  
      <label>
        Name:
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message:
        <input type="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit" onClick={submitContactForm}>Submit</button>
    </form>
  );
};

export default SubmitContactForm;