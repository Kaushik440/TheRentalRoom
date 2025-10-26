// src/About.js
import React from "react";
import "./About.css";
import abc from "./images/aboutus image.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={abc} alt="About Us" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are passionate about LetMERENT
        </p>
        <p>
          A Rental Room Search web application is a comprehensive solution for
          modernizing the way people find rental accommodations. By leveraging
          advanced technologies and user-centric design, it offers an efficient,
          transparent, and secure platform for both tenants and landlords,
          enhancing the overall rental experience..
        </p>
        <p>
          Contact us at:{" "}
          <a href="mailto:kaushikpandey440@gmail.com">
            Letmerent2024@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
