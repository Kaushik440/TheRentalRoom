import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css';

function Header() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <header>
      <div className="login">
        {isAuthenticated && user && (
          <div>
            <p className='username'>{user.name}</p>
          </div>
        )}
        {isAuthenticated ? (
          <div>
            <button className='Buttonlogin' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <button className='Buttonlogin' onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        )}
      </div>
      
      <nav className='navbar'>
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
            <option value="1bhkR">1BHK</option>
            <option value="2bhkR">2BHK</option>
            <option value="1bhkF">3BHK</option>
            <option value="home">HOME</option>
          </select>
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
