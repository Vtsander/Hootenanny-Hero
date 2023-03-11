/*import React, { useState } from "react";*/
import { Link } from 'react-router-dom';
import '../../assets/css/events.css'
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const Events = () => {
  
  return (
    <div className="card bg-white card-rounded w-50">
       <Navbar />
     <h2>Are you tired of the same old boring events? Well, we've got you covered! Our event planner is like a mad scientist, but instead of creating monsters, we create the wildest parties you've ever seen. From fire breathers to breakdancing grandmas, we'll make sure your event is the talk of the town. Just tell us your wildest dreams, and we'll make them a reality... without the risk of getting sued. </h2>

     <h2> Wedding Packages</h2>
     <h3>"Tie The Knot Package" </h3>
     <p>Get hitched without a hitch with our Tie The Knot Package! We'll take care of everything from the flowers to the cake, so you can focus on tying the knot.</p>

     <h2> Bridal Shower</h2>
     <h3>Shower Me With Love Package </h3>
      <p>Shower the bride-to-be with love with our Shower Me With Love Package! We'll handle everything from the decorations to the games, so you can focus on celebrating the bride.</p>

     <h2> Party Packages</h2>
     <h3>Let's Get This Party Started Package! </h3>
      <p>Throw a party that'll go down in history with our We'll handle everything from the invitations to the music, so you can focus on having fun.</p>

      <h2> Cooperate Events </h2>
     <h3>Making Business Fun Package </h3>
      <p>Make your next corporate event one to remember with our Making Business Fun Package! We'll handle everything from the venue to the catering, so you can focus on networking and having fun.</p>

      <h2> Pick Your Own Poison</h2>
     <h3>Don't see what you need? Let us know!</h3>
      <p>Here, you get to call the shots and we'll make sure it's a hit. Want to ride in on an elephant? We'll make it happen (assuming you can get one to wear a tuxedo). Want a unicorn-themed bar? Say no more, we'll sprinkle some magic and make it happen. Want a rollercoaster ride during your wedding ceremony? We'll strap in and hold on tight. You dream it, we'll make it a reality (as long as it's legal, safe, and doesn't involve clowns).</p>
      
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

export default Events;
