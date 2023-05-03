import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card ({imageSource}) {
  return (
    <div className="card bg-light m-2">
      <img src={`/images/${imageSource}.jpg`} alt='...' className="card-img-top"/>
      <div class="card-body">
        <h4 class="card-title">Car Title</h4>
        <h6 class="card-text">Model:</h6>
        <h6 class="card-text">Year:</h6>
        <h6 class="card-text">Price:</h6>
        <a href="/" className="text-decoration-none fw-bold">See more</a>
      </div>
    </div>
  )
}
export default Card;
