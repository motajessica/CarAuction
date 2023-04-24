import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Hero () {
  return (
    <div> 
      <img src="/images/cooking-1.jpg" alt='...' className="hero-img" style={{backgroundImage: "url('/images/cooking-1.jpg'), height:400"}}/>
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="row">
        
        <div className="col-lg-6 mb-5" id="title" >
          <h2 className="heading-1">Unleash your inner chef with our amazing & simple recipes.</h2>
          <button type="button" class="btn btn-dark btn-lg download-button" ><i class="fab fa-apple me-1"></i>Download</button>
          <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play me-1"></i>Download</button>
        </div>

        <div className="col-lg-6 position-relative">
        </div>

      </div>
    </div>     
</div>

  );
}

export default Hero;
