import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css'; // Import CSS for UserLogin component
import Footer from './Footer';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';
function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // JavaScript validation
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const userData = await response.json();
      console.log('Login successful:', userData);

      // Redirect to user page with user data after successful login
      navigate('/user', { state: { user: userData } });
      alert('Login successfully!');
    } catch (error) {
      alert('Invalid email or password. Please try again.'); // Show an alert box with the error message
    }
  };

  return (
    <div>
      <NavigationBar/>
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/useregisration" className="register-link">Register here</Link></p>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default UserLogin
