import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../Image/logo.png'; // Import your logo file

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="mnnavbar">
 <img src={logo} alt="Logo" className="logo" /> {/* Include your logo */}
      <button className={`menu-btn ${isActive ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`mnnav-links ${isActive ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsActive(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsActive(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsActive(false)}>Contact</Link></li>
        <li><Link to="/userlogin" onClick={() => setIsActive(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
