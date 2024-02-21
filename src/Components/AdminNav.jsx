import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () => {
  
  return (
   
    <nav className="nbnavbar">
    <div className="container">
     
      <ul className="nav-links">
      <li><Link to="/adminpage" className="nav-link">Home</Link></li>
    <li><Link to="/adminappointment" className="nav-link">Appintment</Link></li>
    <li><Link to="/userdetails" className="nav-link">User Details</Link></li>
    <li><Link to="/admindetails" className="nav-link">Admin Details</Link></li>
      
      </ul>
    </div>
    
  </nav>

  );
};

export default AdminNav;
