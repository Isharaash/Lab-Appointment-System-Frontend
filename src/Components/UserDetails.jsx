import React, { useState, useEffect } from 'react';
import './UserDetails.css';
import AdminNav from './AdminNav';
import Footer from './Footer';


function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/user/all')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  return (
    <div>
  
        <AdminNav/>
      <h2>User Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.fname || '-'}</td>
              <td>{user.lname || '-'}</td>
              <td>{user.age || 0}</td>
              <td>{user.sex || '-'}</td>
              <td>{user.phone || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}

export default UserDetails;
