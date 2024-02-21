import React, { useState, useEffect } from 'react';

import './TechicianPage.css';
import AdminProfile from './AdminProfile';
import TechicianNav from './TechicianNav';
import AdminLogout from './AdminLogout';


const Technicianspage = () => {
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
   <TechicianNav/>
    <h3 className="welcmss" > Welcome, {adminData && adminData.fname} {adminData && adminData.lname}</h3> 
    {adminData && <AdminProfile location={{ state: { adminData } }} />}
      
   
    </div>
  );
};


export default Technicianspage;
