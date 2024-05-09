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
    <>

      <div className="container1 justify-content-center">
      <h2 className="homeExpc" mt-0>Explore City</h2>
        <div id="carouselExampleCaptions" class="carousel slide " >
          <div class="carousel-indicators" >
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img
                src={GKP}
                class="d-block w-100 custom-carousel-image "
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{ color:'Blue' }}>Gorakhpur, Uttar Pradesh</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item ">
              <img
               src={Lucknow}
                class="d-block w-100 custom-carousel-image"
                alt="Lucknow"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{ color:'Blue' }}>Lucknow,Uttar Pradesh</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" >
              <img
                src={Varanasi}
                class="d-block w-100 custom-carousel-image"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 style={{ color:'Blue' }}>Varanasi,Uttar Pradesh</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
       
        <h3 className="ourcollection">Our Collections</h3>
        <div className="container3">
          
          <div className="room">
            <img src={BHK1} alt="Single Room" />
            <p>1BHK</p>
          </div>
          <div className="room">
            <img src={BHK2} alt="Double Room"  />
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
    </>
  );
}

export default Home;
