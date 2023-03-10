import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/CreateAccount.css'
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const CreateAccountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userCredential = null;
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // User signed up successfully
      const user = userCredential.user;
      // You can store user data in Firebase Firestore or Realtime Database
    } catch (error) {
      console.log(error);
  
    }
      // Save additional user data to Firestore
      await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
        name,
        username,
        email,
      });

      // Upload file to Firebase Storage
      if (file) {
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(`files/${file.name}`);
        await fileRef.put(file);
      }

      // Redirect to the congratulations page
      navigate('/congrats');
    /*} catch (error), {
      /*console.error(error);
    }*/
  };
  
  return (
    <form onSubmit={handleSubmit}>   
      <Navbar />
      <label>
        Name:
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className="button-container">
        <button type="submit">Submit</button>
        <button type="button">
          <Link to="/">Cancel</Link>
        </button>
      </div>  
    </form>
  );
  }

const CreateAccountPage = () => {
  return (
    <>
      <h2>Creating an account is the first step to planning your next event with us!</h2>
      <div className="form-container">
        <div className="login-form">
          <CreateAccountForm />   
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
    </>
  );
};

export default CreateAccountPage;