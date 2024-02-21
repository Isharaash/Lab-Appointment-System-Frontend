import React, { useState, useEffect } from 'react';
import './ViewUserAppointments.css'; // Import the CSS file

const ViewUserAppointments = ({ user }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/user/${user.id}/appointments`);
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [user]);

  const deleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/${user.id}/appointments/${appointmentId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }
      // Remove the deleted appointment from the state
      setAppointments(appointments.filter(appointment => appointment.id !== appointmentId));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="table-container">
      <h2>My Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Appointment Time</th>
            <th>Doctor</th>
            <th>Test</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{new Date(appointment.appointmentTime).toLocaleString()}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.test}</td>
              <td>{appointment.des}</td>
              <td>
                <button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUserAppointments;
