import React from 'react';
import hhevent from '../../assets/images/hhevent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import Navbar from './navbar';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <h1 className="title">Welcome to Hootenanny-Hero!</h1>
      <div className="home">
        <img src={hhevent} alt="hheventPic" className="hhevent" /> 
        <p className="subtitle">Where planning a party is almost as fun as attending one!</p>
        <div className="features">
          <ul className="feature-list">
            <li className="feature"></li>
            <li className="feature">
              <div className="description">
                <h3 className="title">Easily Organize Your Event</h3>
                <p>With our intuitive interface, planning your event is a breeze. You can create tasks, assign them to attendees, and track their progress all in one place.</p>
              </div>
            </li>
            <li className="feature">
              <div className="description">
                <h3 className="title">Make Your Event Memorable</h3>
                <p>From customizable invitations to unique party favors, we help you add that extra touch of magic to make your event unforgettable.</p>
              </div>
            </li>
            <li className="feature">
              <div className="description">
                <h3 className="title">Stay Within Your Budget</h3>
                <p>We understand that planning an event can get expensive. That's why we offer a budget tracking feature to help you keep your expenses in check.</p>
              </div>
            </li>
          </ul>
        </div>
    
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
}

export default Home;