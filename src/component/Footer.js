import React from 'react';
import './Header.css';


function Footer() {
  return (
    <footer>
       <div class="footerContainer">
            <div class ="socialIcons">
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-google-plus"></i></a>
              <a href=""><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div class ="footerNav">
              <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="ContactUS.html">Contact Us</a></li> 
                <li><a href="team.html">Our Team</a></li> 
              </ul>
            </div>
          </div>
          <div class="footerBottom">
            <p>Copyright &copy; 2024 Designed by <span class ="designer">ABCD</span></p>
          </div>
    </footer>
  );
}

export default Footer;
