import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="/contactus">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;