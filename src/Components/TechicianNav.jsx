import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css';

const TechicianNav = () => {
  
  return (
   
    <nav className="nbnavbar">
    <div className="container">
     
      <ul className="nav-links">
      <li><Link to="/technicianspage" className="nav-link">Home</Link></li>
    <li><Link to="/techniciansappointment" className="nav-link">Appintment</Link></li>
   
      
      </ul>
    </div>
    
  </nav>

  );
};

export default TechicianNav;
