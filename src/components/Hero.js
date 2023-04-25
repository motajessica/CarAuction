import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
  
  <div
    className="hero-img mb-5 p-5 text-center bg-image"
    style={{ backgroundImage: "url('/images/bread.jpg')", height: 500 }}
    >
      <div className="py-5 mask">
        <div className="mb-5">
          <h2 className="hero-title container">
            Unleash your inner Chef with our delicious & simple recipes.
          </h2>
          <div className="hero-subtitle container ">
            <h5 className="py-3">
              Download our app for free.
            </h5>
            <button
              type="button"
              class="btn btn-dark btn-md download-button mb-3">
              <i class="fab fa-apple me-1"></i>Download
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-md download-button mb-3">
              <i class="fab fa-google-play me-1"></i>Download
            </button>
          </div>
        </div>
       
        <div className="col-lg-6 position-relative"></div>
      </div>
      </div>
  );
}

export default Hero;
