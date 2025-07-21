import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "../App";
import "./Header.css"
export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <div className="navbar">
      <h1 className="navbar-logo" >__ORDERitUP__</h1>
      <nav className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/cart">MyCart</Link>
      <Link to="/order">MyOrder</Link>

      {/* <Link to="/admin">Admin</Link> */}

      {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      
      {user?.token ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link> }
     </nav>

    </div>
  );
}
