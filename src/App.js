import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import ContactUs from './components/pages/ContactUs';
/*import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);*/



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
            <Route path="/contactus" element={<ContactUs />} />

=======
            <Route path="/ContactUs" element={<ContactUs />} />
>>>>>>> 152eb5dd8d53599e6d15cafd7fefb873dc077694
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
