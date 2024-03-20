
import React, { useState, useEffect } from 'react';
import AdminProfile from './AdminProfile';
import Footer from './Footer';
import './AdminPage.css';
import AdminLogout from './AdminLogout';
import TechicianNav from './TechicianNav';

const AdminPage = () => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    
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
      <h3 className="welcompage">Welcome, {adminData && adminData.fname} {adminData && adminData.lname}</h3> 
      <TechicianNav location={{ state: { adminData } }} />
      {adminData && <AdminProfile location={{ state: { adminData } }} />}
      <Footer/>
    </div>
  );
};

export default AdminPage;
