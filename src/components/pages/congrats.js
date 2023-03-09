import React from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import '../../assets/css/congrats.css';

const Congrats = () => {
  return (
    <div className="center">
      <h1>Congrats You successfully created an account!</h1>
      <Link to="/Profile" className="button">Take me to my new Profile!</Link>
      <Confetti />
    </div>
  );
};

export default Congrats;