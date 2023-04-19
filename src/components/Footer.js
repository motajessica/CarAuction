
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="footer w-100 text-center pt-4 pb-4">
        
        <footer>Recipes App{year} </footer>
      </div>
  </footer>
  )
  }


export default Footer;