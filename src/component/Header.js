import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header>
      <div className="login">
        <Link to="/login">Login/SignUp</Link>
      </div>
      
      <nav>
        <Link to="/" className="active">Home</Link>
        <Link to="/save">Save</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="search-container">
          <label htmlFor="city">City:</label>
          <select id="city" name="city">
            <option value="">-- Select City --</option>
            <option value="Gorakhpur">Gorakhpur</option>
            <option value="Deoria">Deoria</option>
            <option value="Basti">Basti</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Delhi">Delhi</option>
            {/* Add more cities as needed */}
          </select>
          <label htmlFor="roomType">Room Type:</label>
          <select id="roomType" name="roomType">
            <option value="">-- Select RoomType --</option>
            <option value="1bhkR">1BHKRoom</option>
            <option value="2bhkR">2BHKRoom</option>
            <option value="1bhkF">1BHK Flate</option>
            <option value="2bhkF">2BHK Flate</option>
            <option value="PG">PG</option>
            <option value="Villa">Villa</option>
          </select>
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
