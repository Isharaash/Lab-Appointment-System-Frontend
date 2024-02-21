import React, { useState, useEffect } from 'react';
import AdminProfile from './AdminProfile';
import AdminNav from './AdminNav';
import Footer from './Footer';
import './AdminPage.css';
import AdminLogout from './AdminLogout';

const AdminPage = () => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // Fetch admin data from the server or from localStorage if available
    const storedAdminData = {
      fname: localStorage.getItem('fname'),
      lname: localStorage.getItem('lname'),
      email: localStorage.getItem('email'),
      phone: localStorage.getItem('phone'),
      // Add other admin profile data as needed
    };
    setAdminData(storedAdminData);
  }, []);

  return (
    <div>
      <AdminLogout/>
    <h3 className="welcompage" > Welcome, {adminData && adminData.fname} {adminData && adminData.lname}</h3> 
      <AdminNav location={{ state: { adminData } }} />
      {adminData && <AdminProfile location={{ state: { adminData } }} />}
      <Footer/>
    </div>
  );
};

export default AdminPage;
