import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
     
<div class="container">
<ul class="foote_bottom_ul_amrc">
<li><a href="http://webenlance.com">Home</a></li>
<li><a href="http://webenlance.com">About</a></li>
<li><a href="http://webenlance.com">Services</a></li>
<li><a href="http://webenlance.com">Pricing</a></li>
<li><a href="http://webenlance.com">Blog</a></li>
<li><a href="http://webenlance.com">Contact</a></li>
</ul>

<p class="text-center">Copyright @{year} | Designed With by <a href="#">Your Company Name</a></p>

<ul class="social_footer_ul">
<li><a href="http://webenlance.com"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="http://webenlance.com"><i class="fab fa-twitter"></i></a></li>
<li><a href="http://webenlance.com"><i class="fab fa-linkedin"></i></a></li>
<li><a href="http://webenlance.com"><i class="fab fa-instagram"></i></a></li>
</ul>
</div>
      {/* <div class="footer w-100 text-center pt-3">
        <footer>CookBook App © {year} </footer>
      </div> */}
  </footer>
  );
};

export default Footer;