// SearchResults.js
import React from 'react';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div className="card">
            <div   key={index} class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
    <div className="images-container">
          
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
          {result.image1_url && <img src={`http://localhost/React-php/${result.image1_url}`} alt={`City ${result.city}`}  />}
          </div>
          <div class="carousel-item">
          {result.image2_url && <img src={`http://localhost/React-php/${result.image2_url}`} alt={`City ${result.city}`} />}
          </div>
          <div class="carousel-item">
          {result.image3_url && <img src={`http://localhost/React-php/${result.image3_url}`} alt={`City ${result.city}`} />}
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">House Name : {result.house_name}</h3>
        <p class="card-text">Owner: {result.owner_name}</p>
        <p class="card-text">Address: {result.address}</p>
        <p class="card-text">City: {result.city}</p>
        <p class="card-text">Price: {result.price}</p>
        <p class="card-text">Room Type: {result.type}</p>
        <p class="card-text">Total Area: {result.carpet_area}</p>
        <p class="card-text">Total Floor: {result.total_floor}</p>
        <p class="card-text">Floor Number: {result.floor_number}</p>
        <p class="card-text">Furnishing: {result.furnishing}</p>
        <p class="card-text">Email address {result.email}</p>
        <p class="card-text">Contact Number: {result.contact_number}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
         

        



           {/* <div className="images-container">
          {result.image1_url && <img src={`http://localhost/React-php/${result.image1_url}`} alt={`City ${result.city}`} />}
          {result.image2_url && <img src={`http://localhost/React-php/${result.image2_url}`} alt={`City ${result.city}`} />}
        {result.image3_url && <img src={`http://localhost/React-php/${result.image3_url}`} alt={`City ${result.city}`} />}

          </div>
         Add more fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
