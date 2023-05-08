import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
<div>


    <div
    className="hero-background mb-5 p-5 text-left"
    style={{height: 600 }}
    >
      <div className="py-5 d-flex flex-column justify-content-center gap">
        <h1 className="hero-title container">
          Turners
        </h1>
        <div className="hero-subtitle container">
          <h3 className="mt-5">
            We love buying cars
          </h3>         
        </div>
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
