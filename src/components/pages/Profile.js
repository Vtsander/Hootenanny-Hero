import React from 'react';
import LoggedInNavbar from './LoggedInNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const name = localStorage.getItem('name');
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  return (
    <div>
      <LoggedInNavbar />
      <div className="profile-info">
        <img className="profile-image" src="https://via.placeholder.com/150" alt="Profile" />
        <div className="upload-container">
        <button className="upload-button">Upload</button>
      </div>
        <div className="profile-details">
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p className="no-events">Events: You have no saved events</p>
        </div>
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
  );
};

export default Profile;