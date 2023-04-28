import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div class="footer w-100 text-center pt-3">
        <footer>CookBook App © {year} </footer>
      </div>
  </footer>
  );
};

export default Footer;