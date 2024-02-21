import React from 'react';
import NavigationBar from './NavigationBar'; // Assuming you have a NavigationBar component
import Footer from './Footer'; // Assuming you have a Footer component
import Card from './Card'; // Assuming you have a Card component
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

