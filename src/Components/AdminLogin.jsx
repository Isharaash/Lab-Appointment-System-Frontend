import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css'; // Import CSS file for styling
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      window.alert('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/admin/login', { email, password });
      console.log(response.data); // Add this line to inspect the response data
      const { token, role, fname, lname, phone } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('fname', fname);
      localStorage.setItem('lname', lname);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      if (role === 'ADMIN') {
        window.alert(`Login successful! Welcome, ${fname} `);
        navigate('/AdminPage');
      } else if (role === 'TECHNICIANS') {
        window.alert(`Login successful! Welcome, ${fname} `);
        navigate('/technicians');
      }
    } catch (error) {
      window.alert('Invalid email or password');
    }
  };

  return (
    <div>
      <NavigationBar/>
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default AdminLogin;






