import React from "react";
import LoggedInNavbar from './LoggedInNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const NewEvent = () => {
  
  return (
    <div className="card bg-white card-rounded w-50">
       <LoggedInNavbar />
     <h2>Fresh Event Concepts</h2>
      <p>Are you tired of the same old boring events? Well, we've got you covered! Our event planner is like a mad scientist, but instead of creating monsters, we create the wildest parties you've ever seen. From fire breathers to breakdancing grandmas, we'll make sure your event is the talk of the town. Just tell us your wildest dreams, and we'll make them a reality. </p>

     <h2> Weddings</h2>
     <h3>"Tie The Knot Package" </h3>
     <p>Make the bride-to-be feel extra special with our Shower Me With Love Package. We'll take care of the decorations and games, so you can focus on creating memories that will last a lifetime.</p>

     <h2> Bridal Shower</h2>
     <h3>Shower Me With Love Package </h3>
      <p>Get hitched without a hitch with our Tie The Knot Package! We'll take care of everything from the flowers to the cake, so you can focus on tying the knot.</p>

     <h2> Parties</h2>
     <h3>Let's Get This Party Started Package! </h3>
      <p>Make history with an unforgettable party experience! With our expert team taking care of everything from invitations to music, you can sit back, relax, and enjoy the celebration. Let us help you create memories that will last a lifetime.</p>

      <h2> Cooperate Events </h2>
     <h3>Making Business Fun Package </h3>
      <p>Make your next corporate event a success with our Making Business Fun Package! We take care of everything from venue to catering, so you can focus on networking and building connections. Let us help you create an unforgettable event that your guests will be talking about for years to come.</p>

      <h2> Customize your own experience with our range of options.</h2>
     <h3>If you don't find what you're looking for, please inform us, and we'll do our best to accommodate your needs.</h3>
      <p>Bring your wildest dreams to life with our customized event planning service! We're here to make your event vision a reality, no matter how unconventional it may be. Whether it's a unicorn-themed bar or a rollercoaster ride during your wedding ceremony, we'll go above and beyond to ensure that your event is unique, unforgettable and truly one-of-a-kind. With our expert team by your side, you can rest assured that we'll make it happen - all you have to do is dream big!</p> 
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

export default NewEvent;