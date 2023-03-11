import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/loggedinnavbar.css';

function LoggedInNavbar() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/budget">My Budget</Link></li>
          <li><Link to="/NewEvent">Event Concepts</Link></li>
          <li><Link to="/checkout">Check Out</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default LoggedInNavbar;