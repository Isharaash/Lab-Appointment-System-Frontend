import React from 'react';
import { useLocation } from 'react-router-dom';
import UserNav from './UserNav';
import UserProfile from './UserProfile';
import PostAppointment from './Appointment';
import UserAppointments from './ViewUserAppointment';
import Logout from './Logout';
import Footer from './Footer';




const UserPage = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div>
      <Logout/>
      <UserNav user={user}/>
      <UserProfile user={user}/>
      <PostAppointment user={user}/>
      <UserAppointments user={user}/>
      <Footer/>






 
    </div>
  );
};

export default UserPage;
