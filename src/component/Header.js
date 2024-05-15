import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchResults from "./SearchResults";

function Header() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = async () => {
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

    const data = await response.json();
    setSearchResults(data);
    setSearchClicked(true);
  };

  return (
    <>
      <header>
        <Link to="/loginu" className="login">
          Login
        </Link>
        <h1>LETMERENT</h1>

        <nav>
<<<<<<< HEAD
          <Link to="/" className="activec" >
=======
          <Link to="/" className="active">
>>>>>>> bf5303f4b2145c982c7e3d21c295000d2fdd0457
            Home
          </Link>
          <Link to="/about" className="navclass">
            About
          </Link>
          <Link to="/contact" className="navclass">
            Contact
          </Link>
          <Link to="/adminlogin" className="navclass">
            Admin Login
          </Link>

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
              <option value="">-- Select RoomType --</option>
              <option value="1bhk">1BHK</option>
              <option value="2bhk">2BHK</option>
              <option value="1bhk">3BHK</option>
              <option value="home">HOME</option>
            </select>

            <Link className="searchhide" to="/0">
              {/*SSSSsss */} <button onClick={handleSearch}>Search</button>
            </Link>
          </div>
        </nav>
      </header>
      <div className="SearchResultContainer">
        {/* Render search results component if search button is clicked */}
        {searchClicked && <SearchResults results={searchResults} />}
      </div>
    </>
  );
}

export default Header;
