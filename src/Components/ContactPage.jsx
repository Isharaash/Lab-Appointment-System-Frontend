import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Card from './Card';
import './ContactPage.css'; // Import CSS for ContactPage component

const ContactPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="Contact">
        <h2>Contact Us</h2>
        <p>If you have any inquiries, please contact us at:</p>
        <Card
          title="Address"
          content="123 Main Street, City, Country"
          icon="map-marker"
        />
        <Card
          title="Email"
          content="info@abclabs.com"
          icon="envelope"
        />
        <Card
          title="Phone"
          content="123-456-7890"
          icon="phone"
        />
        {/* Add additional contact information as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
