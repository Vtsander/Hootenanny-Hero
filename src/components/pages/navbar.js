import React from 'react';
import './navbar.css';
import { useState } from 'react';

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
