import React from 'react';
import LoggedInNavbar from './LoggedInNavbar';

const Profile = () => {
  return (
    <div>
       <LoggedInNavbar />
      <h1>Profile Page</h1>
      <p>Welcome to your profile page!</p>
      <p>Here you can view and edit your personal information.</p>
      {/* Add your profile details and edit form here */}
    </div>
  );
};

export default Profile;