import React from "react";
import "./About.css";
import aboutimage from "./images/aboutus image.jpg";
function About() {
  return (
    <div>
      <main style={{ backgroundColor: "#aaeba7" }}>
        <section className="about-section h2">
          <h2 class="text-center">About Us</h2>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={aboutimage}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Welcome to our website! We are dedicated to...
                  </h5>
                  <p className="card-text">
                    At Rental Room Search, our mission is simple yet powerful:
                    to revolutionize the way people search for rental rooms. We
                    are dedicated to providing broker-free services, ensuring
                    that our users can find their ideal living spaces at
                    efficient costs without any intermediary hassles.
                  </p>
                  <p className="card-text">
                    {" "}
                    Our platform is designed to offer a seamless experience,
                    connecting tenants directly with property owners or
                    managers. Whether you're looking for a cozy apartment, a
                    spacious room, or shared accommodation, we've got you
                    covered.
                  </p>
                  <p className="card-text">
                    Moreover, we believe in empowering property owners by
                    offering a convenient solution for listing their rental
                    spaces. With our user-friendly interface, uploading room
                    details and making them available for rent has never been
                    easier.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Thank You</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
