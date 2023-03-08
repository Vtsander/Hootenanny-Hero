import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import ContactUs from './components/pages/ContactUs';
//import Budget from './components/pages/Budget';
import StripeCheckout from 'react-stripe-checkout';
import Checkout from './components/features/Checkout';


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
            <Route path="/contactus" element={<ContactUs />} />
        
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
