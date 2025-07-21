import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const location = useLocation();

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <Link
          to="/admin"
          className={location.pathname === "/admin" ? "active" : ""}
        >
          Users
        </Link>
        <Link
          to="/admin/products"
          className={location.pathname === "/admin/products" ? "active" : ""}
        >
          Products
        </Link>
        <Link
          to="/admin/orders"
          className={location.pathname === "/admin/orders" ? "active" : ""}
        >
          Orders
        </Link>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}


// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import "./Admin.css";
// export default function Admin() {
//   return (
//     <div className="admin-container">
//       <Link to="/admin">Users</Link>-
//       <Link to="/admin/products">Products</Link>-
//       <Link to="/admin/orders">Orders</Link>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// }
