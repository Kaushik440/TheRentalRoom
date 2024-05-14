import React from 'react';
import { Link } from 'react-router-dom';
import './header1.css';

function NavBar() {
  return (
    <header1>
    <nav>
      <div className="container">
       
        <ul>
            <li> <h5>My Website</h5></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
    </header1>
  );
}

export default NavBar;

