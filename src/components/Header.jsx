import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "../App";
import "./Header.css";

export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="header-logo">
          <Link to="/" aria-label="Home" className="logo-link">
            {/* You can replace with your SVG/logo */}
            <span className="logo-text">MERN Frontend</span>
          </Link>
        </div>
        <nav className="nav-links" aria-label="Main Navigation">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/cart">MyCart</Link>
          <Link className="nav-link" to="/order">MyOrder</Link>
          {user?.role === "admin" && (
            <Link className="nav-link" to="/admin">Admin</Link>
          )}
          {user?.token
            ? <Link className="nav-link" to="/profile">Profile</Link>
            : <Link className="nav-link" to="/login">Login</Link>
          }
        </nav>
      </div>
    </header>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import App, { AppContext } from "../App";
// export default function Header() {
//   const { user } = useContext(AppContext);
//   return (
//     <div>
//       <h1>MERN Frontend</h1>
//       <Link to="/">Home</Link>-<Link to="/cart">MyCart</Link>-
//       <Link to="/order">MyOrder</Link>

//       {/* <Link to="/admin">Admin</Link> */}

//       -{user?.role === "admin" && <Link to="/admin">Admin</Link>}
      
//       {user?.token ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link> }


//     </div>
//   );
// }
