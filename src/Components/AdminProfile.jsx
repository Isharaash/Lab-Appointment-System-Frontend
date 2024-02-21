import React from 'react';
import './AdminProfile.css'; // Import the CSS file

const AdminProfile = ({ location }) => {
  // Extracting adminData from location state
  const { adminData } = location.state;

  return (
    <div className="admin-profile">
      <h2>Profile</h2>
      <div>
        <p>First Name: {adminData.fname}</p>
        <p>Last Name: {adminData.lname}</p>
        <p>Email: {adminData.email}</p>
        <p>Phone: {adminData.phone}</p>
        {/* Add other admin profile details here */}
      </div>
    </div>
  );
};

export default AdminProfile;

