import React from 'react';
import { Link } from 'react-router-dom';
import './thankyou.css';

const ThankYou = () => {
  return (
    <div className="center">
      <h1>Thank you for Contacting Us!</h1>
      <p>We will review your message and get back to you as soon as possible.</p>
      <p>Have a wonderful day!!</p>
      <Link to="/" className="button">Back to Home</Link>
    </div>
  );
};

export default ThankYou;