import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import '../../assets/css/CreateAccount.css';

const CreateAccountPage = ({ firebaseConfig }) => {
const [name] = useState('');
const [username] = useState('');
const [email] = useState('');
const [password] = useState('');
//const [confirmPassword, setConfirmPassword] = useState('');
const [file, setFile] = useState(null);
const navigate = useNavigate();

const handleFileChange = (e) => {
setFile(e.target.files[0]);
};

useEffect(() => {
// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
}, [firebaseConfig]);

const handleSubmit = async (e) => {
e.preventDefault();
try {
const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
// User signed up successfully
const user = userCredential.user;
// Save additional user data to Firestore
await firebase.firestore().collection('users').doc(user.uid).set({
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
} catch (error) {
console.log(error);
}
};

const CreateAccountForm = ({ name, setName, username, setUsername, email, setEmail, password, setPassword }) => {
  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
    </div>
  );
};

const CreateAccountPage = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar />
      <h2>Creating an account is the first step to planning your next event with us!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="login-form">
            <CreateAccountForm
              name={name}
              setName={setName}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="button">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    </>
  );
};
};

export default CreateAccountPage;
