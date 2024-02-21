import React, { useState } from 'react';
import axios from 'axios';
import './AdminRegistration.css'; // Import CSS file for styling
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    fname: '',
    lname: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/admin/create', formData);
        console.log(response.data); // handle success response
        window.location.href = '/adminlogin';
        alert('Login successfully!');
        // Clear form data after successful registration
        setFormData({
          email: '',
          fname: '',
          lname: '',
          phone: '',
          password: '',
          confirmPassword: '',
          role: ''
        });
      } catch (error) {
        console.error('Error:', error); // handle error
      }
    }
  };

  const validateForm = () => {
    if (!formData.email || !formData.fname || !formData.lname || !formData.phone || !formData.password || !formData.confirmPassword || !formData.role) {
      window.alert('Please fill in all fields');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      window.alert('Passwords do not match');
      return false;
    }

    return true;
  };

  return (
    <div>
      <NavigationBar/>
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="TECHNICIANS">Technician</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default AdminRegistration;
