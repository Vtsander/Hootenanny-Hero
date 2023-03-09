import React, { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './CreateAccount.css';

const firebaseConfig = {
  apiKey: "AIzaSyAqJkFz1-5jWC1MVnjPCdV0kfLLdkBiSA8",
  authDomain: "hotenanny-hero.firebaseapp.com",
  projectId: "hotenanny-hero",
  storageBucket: "hotenanny-hero.appspot.com",
  messagingSenderId: "1085708570645",
  appId: "1:1085708570645:web:d4dfc4faf1b03ac210be1c"
};
firebase.initializeApp(firebaseConfig);

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill out all fields!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.href = 'profile.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
      <label htmlFor="confirm-password">Confirm Password</label>
      <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
