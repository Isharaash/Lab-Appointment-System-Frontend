import React from 'react';

import AdminLogin from './Components/AdminLogin';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRegistration from './Components/AdminRegistration';




import UserPage from './Components/UserPage';
import AdminPage from './Components/AdminPage';
import Logout from './Components/Logout';
import UserRegistration from './Components/UserRegistration';
import Technicians from './Components/TechniciansPage';
import ViewAdminAppointment from './Components/ViewAdminAppointment';
import AdminDetails from './Components/AdminDetails';
import UserDetails from './Components/UserDetails';
import Technicianspage from './Components/TechniciansPage';
import TechnicianAppointment from './Components/TechnicianAppointment';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import UserLogin from './Components/UserLogin';





function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/about" element={<AboutPage/>} ></Route>
        <Route path="/contact" element={<ContactPage/>} ></Route>
          <Route path="/adminregistration" element={<AdminRegistration/>} ></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/adminpage" element={<AdminPage/>}></Route>
          <Route path="/technicians" element={<Technicians/>}></Route>
          <Route path="/useregisration" element={<UserRegistration/>}></Route>
          <Route path="/userlogin" element={<UserLogin/>}></Route>
          <Route path="/user" element={<UserPage/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/adminappointment" element={<ViewAdminAppointment/>}></Route>
          <Route path="/admindetails" element={<AdminDetails/>}></Route>
          <Route path="/userdetails" element={<UserDetails/>}></Route>
          <Route path="/technicianspage" element={<Technicianspage/>}></Route>
          <Route path="/techniciansappointment" element={<TechnicianAppointment/>}></Route>
       
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
