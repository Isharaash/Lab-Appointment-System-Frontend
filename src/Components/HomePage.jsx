import React from 'react';
import './Home.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import First from "../Image/1.png";
import Second from "../Image/2.jpg";
import Third from "../Image/3.jpeg";


const HomePage = () => {
  return (
    <div>
        <NavigationBar/>
    <div className="Home">
      <h1>Welcome to ABC Laboratories</h1>
    
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={First}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Second}
          alt="Second slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Third}
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <p>We provide a range of services for medical tests.</p>

    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
