import React from "react";
import "./SearchResult.css";

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div className="card mb-3" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <div className="images-container">
                <div
                  id={`carouselExampleAutoplaying-${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner css">
                    {result.image1_url && (
                      <div className="carousel-item active">
                        <img
                          src={`http://localhost/React-php/${result.image1_url}`}
                          className="d-block w-100"
                          alt={`City ${result.city}`}
                        />
                      </div>
                    )}
                    {result.image2_url && (
                      <div className="carousel-item">
                        <img
                          src={`http://localhost/React-php/${result.image2_url}`}
                          className="d-block w-100"
                          alt={`City ${result.city}`}
                        />
                      </div>
                    )}
                    {result.image3_url && (
                      <div className="carousel-item">
                        <img
                          src={`http://localhost/React-php/${result.image3_url}`}
                          className="d-block w-100"
                          alt={`City ${result.city}`}
                        />
                      </div>
                    )}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carouselExampleAutoplaying-${index}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carouselExampleAutoplaying-${index}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">House Name: {result.house_name}</h3>
                <p className="card-text">
                  <pre>Address: {result.address}</pre>
                </p>
                <p className="card-text">
                  <pre>City: {result.city}</pre>
                </p>
                <p className="card-text">
                  <pre>Price: {result.price}   Room Type: {result.type}</pre>
                </p>
                <p className="card-text">
                  <pre>Total Area: {result.carpet_area}   Total Floor: {result.total_floor}</pre>
                </p>
                <p className="card-text">
                  <pre>Floor Number: {result.floor_number}   Furnishing: {result.furnishing}</pre>
                </p>
                <p className="card-text">Owner Name: {result.owner_name}</p>
                <p className="card-text">
                  <pre>Email address: {result.email}</pre>
                </p>
                <p className="card-text">
                  <pre>Contact Number: <a href={`tel:+91${result.contact_number}`}>+91{result.contact_number}</a></pre>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
