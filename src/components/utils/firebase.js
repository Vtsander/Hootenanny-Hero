import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqJkFz1-5jWC1MVnjPCdV0kfLLdkBiSA8",
  authDomain: "hotenanny-hero.firebaseapp.com",
  projectId: "hotenanny-hero",
  storageBucket: "hotenanny-hero.appspot.com",
  messagingSenderId: "1085708570645",
  appId: "1:1085708570645:web:d4dfc4faf1b03ac210be1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);