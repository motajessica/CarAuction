
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div class="footer w-100 text-center bg-color pt-4 pb-3">
        
        <footer>Recipes App{year} </footer>
      </div>
  </footer>
  )
  }


export default Footer;