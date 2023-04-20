import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Cards () {
  return (
    
    <div className="d-flex flex-wrap justify-content-center">
      <div className="card m-2">
      <img src="/images/quesadilla.jpg" className="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <a href="#" className="link">Go somewhere</a>
      </div>
    </div>

      <div className="card m-2">
        <img src="/images/burger.jpg" className="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..</p>
          <a href="#" className="link">Go somewhere</a>
        </div>
      </div>

      <div className="card m-2">
        <img src="/images/lasagna.jpg" className="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <a href="#" className="link">Go somewhere</a>
        </div>
      </div>


      <div className="card m-2">
        <img src="/images/paella.jpg" className="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..</p>
          <a href="#" className="link">Go somewhere</a>
        </div>
      </div>

      <div className="card m-2">
        <img src="/images/cake.jpg" className="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..</p>
          <a href="#" className="link">Go somewhere</a>
        </div>
      </div>

      <div className="card m-2">
        <img src="/images/meal.jpg" className="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..</p>
          <a href="#" className="link">Go somewhere</a>
        </div>
      </div>
    </div>
  
  )
}
export default Cards;
