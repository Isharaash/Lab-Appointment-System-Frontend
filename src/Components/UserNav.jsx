// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './UserNav.css';// Import CSS file
import { useLocation } from 'react-router-dom';

function UserNav() {
 
  const location = useLocation();
  const user = location.state.user;

    

  return (
    <nav className="usernavbar">
      <div className="container">
        <Link to="/" className="logo">  <h2>Welcome, {user.fname} {user.lname}</h2></Link>
        <ul className="nav-links">
      
        
        </ul>
      </div>
    </nav>
  );
}

export default UserNav;
