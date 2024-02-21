import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Appintment.css'; // Import the CSS file

const Appointment = () => {
  const location = useLocation();
  const user = location.state.user;
  const userId = user.id; // Accessing user ID

  const [appointmentTime, setAppointmentTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [test, setTest] = useState('');
  const [des, setDes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!doctor || !test || !des || !appointmentTime) {
      alert('All fields are required');
      return;
    }

    const appointmentData = {
      userId: userId,
      appointmentTime: appointmentTime,
      doctor: doctor,
      test: test,
      des: des
    };

    try {
      const response = await axios.post('http://localhost:8080/api/user/appointments', appointmentData);
      console.log('Appointment created successfully:', response.data);
    
      alert('Appointment created successfully');
      
      // Reload the page after successful appointment creation
      window.location.reload();
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Doctor:</label>
          <input
            type="text"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="test">Test:</label>
          <select
            id="test"
            value={test}
            onChange={(e) => setTest(e.target.value)}
          >
            <option value="">Select a test</option>
            <option value="Lipid profile">Lipid profile</option>
            <option value="Blood Glucose">Complete Blood Count</option>
            <option value="Blood Glucose">Blood Glucose</option>
            <option value="Liver function tests">Liver function tests</option>
            <option value="Renal function test">Renal function test</option>
            <option value="Thyroid function test">Thyroid function test</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="des">Description:</label>
          <textarea
            id="des"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="datetime-local"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
