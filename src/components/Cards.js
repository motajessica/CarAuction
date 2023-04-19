import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Cards () {
  return (
    
    <div className="d-flex flex-wrap justify-content-center">
      <div className="card m-2 bg-info text-white">
        <div class="card-header">
          Header
        </div>
        <img src="..." className="card-img-top" ></img>
        <div class="card-body">
          {/* <h5 class="card-title">Card title</h5> */}
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#">Go somewhere</a>
        </div>
      </div>

      <div className="card m-2">
        <img src="..." className="card-img-top" ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#">Go somewhere</a>
        </div>
      </div>

      <div className="card m-2">
        <img src="..." className="card-img-top" ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#">Go somewhere</a>
        </div>
      </div>

    </div>
    
       
  )
}
export default Cards;
