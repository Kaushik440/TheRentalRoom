import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Hamburger from "hamburger-react";

function Header() {
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef();
  const [detectedCity, setDetectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          const cityName =
            data.address.city || data.address.town || data.address.village;
          if (cityName) {
            setDetectedCity(cityName);
          }
        } catch (err) {
          console.error("Failed to get city from location", err);
        }
      },
      (err) => {
        console.warn("Location access denied:", err);
      }
    );
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setSearchResults(data);
      navigate("/search-results", { state: { results: data } });
    } catch (error) {
      console.error("Error searching:", error);
      navigate("/error");
    }
  };

  return (
    <div className="header-container">
      <header>
        <div ref={navRef} className="left-section">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <nav>
              <Link to="/" className="navclass">
                Home
              </Link>
              <Link to="/about" className="navclass">
                About
              </Link>
              <Link to="/contact" className="navclass">
                Contact
              </Link>
              <Link to="/loginu" className="navclass">
                Login
              </Link>
              <Link to="/adminlogin" className="navclass">
                Admin Login
              </Link>
            </nav>
          )}
        </div>
        <div className="center-section">
          <p className="HeaderName">LET ME RENT</p>
        </div>
        <div className="right-section">
          {/* optional user info or icon */}
          <Link to="/loginu" className="navclass">
            Login
          </Link>
        </div>
      </header>
      <div className="search-container">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          name="city"
          value={detectedCity}
          onChange={(e) => setDetectedCity(e.target.value)}
        >
          <option value="">-- Select City --</option>
          <option value="Gorakhpur">Gorakhpur</option>
          <option value="Deoria">Deoria</option>
          <option value="Basti">Basti</option>
          <option value="Lucknow">Lucknow</option>
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
    </div>
  );
}

export default Header;
