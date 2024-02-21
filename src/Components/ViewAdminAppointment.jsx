import React, { useState, useEffect } from 'react';
import './ViewAdminAppointment.css';
import AdminNav from './AdminNav';
import Footer from './Footer';

const ViewAdminAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/admin/appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/admin/appointments/${appointmentId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }
      // Remove the deleted appointment from the state
      setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== appointmentId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <AdminNav/>
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Test</th>
            <th>Description</th>
            <th>Appointment Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
             
              <td>{appointment.fname}</td>
              <td>{appointment.lname}</td>
              <td>{appointment.age}</td>
              <td>{appointment.sex}</td>
              <td>{appointment.email}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.test}</td>
              <td>{appointment.des}</td>
              <td>{appointment.appointmentTime}</td>
              <td>
                <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default ViewAdminAppointment;

