import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (

    <div
    className="hero-background hero-img mb-5 p-5 text-left bg-image"
    style={{ backgroundImage: "url('/images/bread.jpg')", height: 500 }}
    >
      <div className="py-5 d-flex flex-column justify-content-center gap">
        <h2 className="hero-title container">
          Turners Car
        </h2>
        <div className="hero-subtitle container">
          <h3 className="mt-5">
            We love buying cars
          </h3>         
        </div>
      </div>
    </div>
    // <div className="hero-background">
    //   <div
    //   className="hero-img mb-5 p-5 bg-image"
    //   style={{ backgroundImage: "url('/images/tina copy.jpg')", height: 400}}
    //   > 
    //   </div>
    // </div>
    
  );
}

export default Hero;
