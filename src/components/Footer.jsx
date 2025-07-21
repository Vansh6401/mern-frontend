import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // At top of Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          src="/Logo.png"
          alt="ORDERitUP Logo"
          className="footer-logo"
        />
        <h3>ORDERitUP</h3>
        <p>Bringing you the best shopping experience online.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/order">Orders</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: ORDERitUP@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/yt.png" alt="Youtube" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/fb.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Instagram.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitte.png" alt="Twitter" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/Github.png" alt="GitHub" />
          </a>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ORDERitUP. All rights reserved.</p>
      </div>
    </footer>
  );
}


// import React from "react";
// import "./Footer.css";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <h3>MyMERNShop</h3>
//         <p>Bringing you the best shopping experience online.</p>
//       </div>

//       <div className="footer-links">
//         <div>
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/cart">Cart</a></li>
//             <li><a href="/order">Orders</a></li>
//             <li><a href="/login">Login</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4>Contact</h4>
//           <p>Email: support@mernshop.com</p>
//           <p>Phone: +91 9876543210</p>
//         </div>

//         <div>
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="#"><i className="fa-brands fa-instagram"></i></a>
//             <a href="#"><i className="fa-brands fa-twitter"></i></a>
//             <a href="#"><i className="fa-brands fa-github"></i></a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} MyMERNShop. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }



// import React from 'react'
// import "./Footer.css"
// export default function Footer() {
//   return (
//     <div className='footer'> <h3>This is footer</h3></div>
//   )
// }
