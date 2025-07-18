import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__links">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer__info">
          <div><strong>Acme Web Solutions</strong></div>
          <div>123 Main St, Cityville, 00000</div>
          <div>Email: info@acme.com | Phone: +1 555-123-4567</div>
        </div>
        <div className="footer__social">
          <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
        </div>
        <div>
          © {new Date().getFullYear()} Acme Web Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


// import React from 'react'
// import "./Footer.css"
// export default function Footer() {
//   return (
//     <div className='footer'> <h3>This is footer</h3></div>
//   )
// }
