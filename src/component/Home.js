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
  <div className="carousel-inner1">
    <div className="carousel-item active1">
      <img src={RENT2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={RENT1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item1">
      <img src={RENT3} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

      <h3 id="ourcollection">Our Collections</h3>
      <div className="container3">
        <div className="room">
          <img src={BHK1} alt="Single Room" />
          <p className=" roomtext">1BHK Room</p>
        </div>
        <div className="room">
          <img src={BHK2} alt="Double Room" />
          <p className="roomtext">2BHK Room</p>
        </div>
        <div className="room">
          <img src={BHK3} alt="Three Room" />
          <p className=" roomtext">3BHK Room</p>
        </div>
        <div className="room">
          <img src={Homeimg} alt="Home" />
          <p className=" roomtypetext">Home</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
