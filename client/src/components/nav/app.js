import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProfilePage from './ProfilePage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import GalleryPage from './GalleryPage';
import BookPage from './BookPage';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProfilePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/book" component={BookPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
};

export default App;