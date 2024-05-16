import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
          <a href=""><i className="fa-brands fa-twitter"></i></a>
          <a href=""><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>Copyright &copy; 2024 Designed by <span className="designer">ABCD</span></p>
      </div>
    </footer>
  );
}

export default Footer;
