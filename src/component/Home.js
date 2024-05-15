import React from "react";
import BHK1 from "./images/1bhk.jpg";
import BHK2 from "./images/2bhk.jpg";
import BHK3 from "./images/3bhk.jpg";
import Homeimg from "./images/Home.jpg";
import RENT1 from "./images/rent1.jpg";
import RENT2 from "./images/rent2.jpg";
import RENT3 from "./images/rent3.jpg";
import './Home.css';

function Home() {
  return (
    <div >
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
<<<<<<< HEAD
  <div className="carousel-inner">
    <div className="carousel-item active">
=======
  <div className="carousel-inner1">
    <div class="carousel-item active1">
>>>>>>> bf5303f4b2145c982c7e3d21c295000d2fdd0457
      <img src={RENT2} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={RENT1} className="d-block w-100" alt="..."/>
    </div>
<<<<<<< HEAD
    <div className="carousel-item">
=======
    <div class="carousel-item1">
>>>>>>> bf5303f4b2145c982c7e3d21c295000d2fdd0457
      <img src={RENT3} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

      <h3 id="ourcollection">Our Collections</h3>
      <div className="container3">
        <div className="room">
          <img src={BHK1} alt="Single Room" />
          <p>1BHK</p>
        </div>
        <div className="room">
          <img src={BHK2} alt="Double Room" />
          <p>2BHK</p>
        </div>
        <div className="room">
          <img src={BHK3} alt="Three Room" />
          <p>3BHK</p>
        </div>
        <div className="room">
          <img src={Homeimg} alt="Home" />
          <p>Home</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
