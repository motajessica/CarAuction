import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div
      className="hero-img mb-5 p-5 bg-image"
      style={{ backgroundImage: "url('/images/tina.jpg')", height: 400}}
      > 
    </div>
  );
}

export default Hero;
