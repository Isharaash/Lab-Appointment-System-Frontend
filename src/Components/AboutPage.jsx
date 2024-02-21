import React from 'react';
import NavigationBar from './NavigationBar'; // Assuming you have a NavigationBar component
import Footer from './Footer'; // Assuming you have a Footer component
import './AboutPage.css'; // Import CSS for AboutPage component

const AboutPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="About">
        <h2>About Us</h2>
        <p>ABC Laboratories is dedicated to providing high-quality medical testing services to our patients.</p>
        <p>Our mission is to ensure accurate and timely test results, utilizing state-of-the-art technology and adhering to the highest standards of quality and safety.</p>
        <p>With a team of experienced professionals, we strive to deliver exceptional service and contribute to the well-being of our community.</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
