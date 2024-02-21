import React from 'react'
import { useLocation } from 'react-router-dom';
import './UserProfile.css';
function UserProfile() {
    const location = useLocation();
    const user = location.state.user;

  return (
    <div> 
    
    <div className="user-card">
      <h2>User Details</h2>
      <p>First Name: {user.fname}</p>
      <p>Last Name: {user.lname}</p>
      <p>Age: {user.age}</p>
      <p>Sex: {user.sex}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
    
    
    
    </div>
  )
}

export default UserProfile