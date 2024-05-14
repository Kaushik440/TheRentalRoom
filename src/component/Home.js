import React from "react";
import BHK1 from "./images/1bhk.jpg";
import BHK2 from "./images/2bhk.jpg";
import BHK3 from "./images/3bhk.jpg";
import Homeimg from "./images/Home.jpg";
import GKP from "./images/gkp.jpg";
import Lucknow from "./images/Lucknow.jpg";
import Varanasi from "./images/varanasi.jpg"
import './Home.css';

function Home() {
  return (
    <div >
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={Lucknow} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={GKP} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Varanasi} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

      <h3 className="ourcollection">Our Collections</h3>
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
