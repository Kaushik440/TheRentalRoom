import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPages"; // Import the ErrorPage component
import "./Header.css";

function Header() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const city = document.getElementById("city").value;
      const type = document.getElementById("type").value;

      const response = await fetch(
        `http://localhost/React-php/search1.php?city=${city}&type=${type}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setSearchResults(data);

      // Navigate to the search results page, passing the results as state
      navigate("/search-results", { state: { results: data } });
    } catch (error) {
      console.error('Error searching:', error);
      // Handle error gracefully (e.g., show a message to the user)
       // Navigate to the error page
       navigate("/error");
    }
  };

  return (
    <>
      <header>
        <Link to="/loginu" className="login">Login</Link>
        <p className="Letmerent">LET ME RENT</p>
        <nav>
          <Link to="/" className="activec">Home</Link>
          <Link to="/about" className="navclass">About</Link>
          <Link to="/contact" className="navclass">Contact</Link>
          <Link to="/adminlogin" className="navclass">Admin Login</Link>
        </nav>
      </header>


      <div className="search-container">
        <label htmlFor="city">City:</label>
        <select id="city" name="city">
          <option value="">-- Select City --</option>
          <option value="Gorakhpur">Gorakhpur</option>
          <option value="Deoria">Deoria</option>
          <option value="Basti">Basti</option>
          <option value="Lucknow">Lucknow</option>
          {/* Add more cities as needed */}
        </select>
        <label htmlFor="type">Room Type:</label>
        <select id="type" name="type">
          <option value="">-- Select Room Type --</option>
          <option value="1bhk">1BHK</option>
          <option value="2bhk">2BHK</option>
          <option value="3bhk">3BHK</option>
          <option value="home">HOME</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}

export default Header;
