// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import Firebase from 'firebase/app';
import Storage from './firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyAMQ8yWvzIXFlcyfkq2dlX3zsYT3plphbQ",
  authDomain: "hootenanny-hero.firebaseapp.com",
  projectId: "hootenanny-hero",
  storageBucket: "hootenanny-hero.appspot.com",
  messagingSenderId: "1040371996357",
  appId: "1:1040371996357:web:8c72b9b8c382e8f8a082ac",
  measurementId: "G-WB2NXFED92"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

Firebase.initializeApp(FirebaseConfig);

const Storage = Firebase.storage();

export const storage = Firebase.storage();

export default { Storage, FirebaseConfig };

 