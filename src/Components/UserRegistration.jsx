import React, { useState } from 'react';
import axios from 'axios';
import './UserRegistration.css'; // Import CSS file for styling
import Footer from './Footer';
import NavigationBar from './NavigationBar';

function UserRegistration() {
    const [formData, setFormData] = useState({
        email: '',
        fname: '',
        lname: '',
        age: '',
        sex: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // JavaScript validation
        if (!validateForm()) {
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/user/create', formData);
            window.alert('Registration successful');
            window.location.href = '/userlogin'; // Redirect to login page after successful registration
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration failure, such as showing an error message to the user
        }
    };

    const validateForm = () => {
        if (!formData.email || !formData.fname || !formData.lname || !formData.age || !formData.sex || !formData.phone || !formData.password || !formData.confirmPassword) {
            alert('Please fill in all fields');
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return false;
        }

        return true;
    };

    return (
      <div>
        <NavigationBar/>
        <div className="registration-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
                <label>First Name:</label>
                <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
                <br />
                <label>Last Name:</label>
                <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
                <br />
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                <br />
                <label>Sex:</label>
                <select name="sex" value={formData.sex} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                <br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <br />
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
        <Footer/>
        </div>
    );
}

export default UserRegistration
