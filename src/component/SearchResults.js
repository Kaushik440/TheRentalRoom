import React from "react";
import "./SearchResult.css";

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div className="card" key={index}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="images-container">
                  <div
                    id={`carouselExampleAutoplaying-${index}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
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
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">House Name : {result.house_name}</h3>
                  <p class="card-text">
                    <pre>  Address: {result.address} </pre>
                  </p>
                  <p class="card-text">
                  City: {result.city} </p>
                  <p class="card-text">
                    <pre> Price: {result.price}   Room Type: {result.type} </pre>
                  </p>
                  <p class="card-text">
                    <pre>
                      Total Area: {result.carpet_area}   Total Floor: {result.total_floor}</pre>
                  </p>
                  <p class="card-text">
                    <pre> Floor Number: {result.floor_number}   Furnishing:{result.furnishing} </pre>
                  </p>
                  <p class="card-texto">Owner Name: {result.owner_name}</p>
                  <p class="card-text"> <pre>Email address: {result.email} </pre>
                  </p> 
                  <p class="card-text">
                    Contact Number:{" "}
                    <a href="tel:+91{result.contact_number}">
                      +91{result.contact_number}
                    </a>
                  </p>
                </div>
              </div>

              {/* Remaining card details */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
