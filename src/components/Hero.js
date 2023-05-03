import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import ControlledCarousel from "../components/ControlledCarousel.js"

function Hero() {
  return (
  <div className="">
    <div
      className="hero-img mb-5 p-5 text-center bg-image"
      style={{ backgroundImage: "url('/images/bread.jpg')", height: 500 }}
      >
      <div className="mt-5"><ControlledCarousel /></div>
      

        <div className="py-5 hero-mask d-flex flex-column justify-content-center gap">
          <h2 className="hero-title container">
            Turner Car
          </h2>
          <div className="hero-subtitle container">
          </div>
        </div>
      </div>

  </div>
  );
}

export default Hero;
