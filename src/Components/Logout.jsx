import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';//

const LogoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is initially logged in
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, e.g., clearing session/local storage, resetting state, etc.
    setIsLoggedIn(false); // Set isLoggedIn to false to simulate logout
    alert('User logged out successfully.');
    navigate('/userlogin'); // Navigate to the Home component after logout
  };

  return (
    <div>
      {isLoggedIn ? (
    <button className="userlogout-button" onClick={handleLogout}>Logout</button>
      ) : (
        <p>User logged out</p>
      )}
    </div>
  );
};

export default LogoutButton;
