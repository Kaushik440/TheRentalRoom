// src/About.js
import React from 'react';
import './About.css';
import  abc from './images/aboutus image.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={abc} alt="About Us" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our website! We are passionate about [your passion or business focus].</p>
        <p>Our mission is to [your mission statement]. We strive to provide the best [products/services] to our customers.</p>
        <p>Contact us at: <a href="mailto:kaushikpandey440@gmail.com">Letmerent2024@gmail.com</a></p>
      </div>
    </div>
  );
};

export default About;
