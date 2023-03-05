import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Navbar from './navbar';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home">
        <h1 className="title">Welcome to Hootenanny-Hero!</h1>
        <p className="subtitle">Where planning a party is almost as fun as attending one!</p>
        <div className="cta">
          <Link to="/events" className="button">View Upcoming Events</Link>
        </div>
        <div className="features">
          <h2 className="subtitle">Why Choose Hootenanny-Hero?</h2>
          <ul className="feature-list">
            <li className="feature">
              <img src="https://i.imgur.com/TVZrCnz.png" alt="Calendar Icon" className="icon" />
              <div className="description">
                <h3 className="title">Easily Organize Your Event</h3>
                <p>With our intuitive interface, planning your event is a breeze. You can create tasks, assign them to attendees, and track their progress all in one place.</p>
              </div>
            </li>
            <li className="feature">
              <img src="https://i.imgur.com/k0gpnNz.png" alt="Confetti Icon" className="icon" />
              <div className="description">
                <h3 className="title">Make Your Event Memorable</h3>
                <p>From customizable invitations to unique party favors, we help you add that extra touch of magic to make your event unforgettable.</p>
              </div>
            </li>
            <li className="feature">
              <img src="https://i.imgur.com/15G0pW8.png" alt="Budget Icon" className="icon" />
              <div className="description">
                <h3 className="title">Stay Within Your Budget</h3>
                <p>We understand that planning an event can get expensive. That's why we offer a budget tracking feature to help you keep your expenses in check.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;