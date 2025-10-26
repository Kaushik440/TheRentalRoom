import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const MyListings = () => {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);

  const userId = localStorage.getItem("user_id"); // or use context/auth

  useEffect(() => {
    // Fetch user profile
    fetch(`http://localhost/React-php/get-user.php?id=${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("User fetch error", err));

    // Fetch user's listings
    fetch(`http://localhost/React-php/get-user-listings.php?user_id=${userId}`)
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error("Listings fetch error", err));
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Dashboard</h2>
        {/* Link to Add Room Page */}
        <Link to="/addroom" className="btn btn-primary mb-4">
        Add New Room
      </Link>

      {/* User Profile Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Welcome, {user.username}</h5>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Phone:</strong> {user.contact_number}</p>
        </div>
      </div>

      {/* Listings Summary */}
      <h4 className="mb-3">My Property Listings ({listings.length})</h4>
      <div className="row g-4">
        {listings.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={`http://localhost/rental-api/${item.image1_url}`} className="card-img-top" alt="Property" />
              <div className="card-body">
                <h5 className="card-title">{item.house_name}</h5>
                <p className="card-text">{item.type} | ₹{item.price}</p>
                <p className="card-text"><small className="text-muted">{item.city}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
