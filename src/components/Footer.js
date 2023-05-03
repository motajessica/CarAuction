import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
  //   <footer className="footer py-3 my-4">
  //   <ul className="nav justify-content-center border-bottom pb-3 mb-3">
  //     <li className="nav-item">
  //       <a href='#' className="nav-link px-2 text-muted"> Home</a>
  //      </li>
  //      <li className="nav-item">
  //       <a href='#' className="nav-link px-2 text-muted"> Features</a>
  //      </li>
  //      <li className="nav-item">
  //       <a href='#' className="nav-link px-2 text-muted"> FAQs</a>
  //      </li>
  //      <li className="nav-item">
  //       <a href='#' className="nav-link px-2 text-muted"> Contact us</a>
  //      </li>
  //      <li className="nav-item">
  //       <a href='#' className="nav-link px-2 text-muted"> About us</a>
  //      </li>
  //   </ul>
  //   <p className="text-center text-muted ">CookBook App © {year} </p>
  // </footer>


  <div class="my-5 mb-0" >

  <footer class="text-white text-center text-lg-start bg-dark">
  
    <div class="container p-4">
      
      <div class="row mt-4">
       
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          <div class="mt-4">
           
            <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-facebook-f"></i></a>
         
            <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-dribbble"></i></a>
  
            <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-twitter"></i></a>
          
            <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-google-plus-g"></i></a>
    
          </div>
        </div>
      
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

          <div class="form-outline form-white mb-4">
            <input type="text" id="formControlLg" class="form-control form-control-lg" />
            <label class="form-label" for="formControlLg">Search</label>
          </div>

          <ul class="fa-ul" >
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Warsaw, 00-967, Poland</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">contact@example.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Opening hours</h5>

          <table class="table text-center text-white">
            <tbody class="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
  
      </div>

    </div>

    <div class="text-center p-3 border-top">
      © {year} Copyright:
      <a class="text-white " href="https://mdbootstrap.com/">Turners Auction</a>
    </div>

  </footer>

</div>


  );
};

export default Footer;