import React, { useState, useEffect } from 'react';
import './AdminDetails.css';
import AdminNav from './AdminNav';
import Footer from './Footer';

function AdminDetails() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/admin/all')
      .then(response => response.json())
      .then(data => setAdmins(data))
      .catch(error => console.error('Error fetching admin details:', error));
  }, []);

  return (
    <div>
        <AdminNav/>
      <h2>Admin Details</h2>
      <table className="admin-table">
        <thead>
          <tr>
            
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.email}</td>
              <td>{admin.fname || '-'}</td>
              <td>{admin.lname || '-'}</td>
              <td>{admin.phone || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}

export default AdminDetails;
