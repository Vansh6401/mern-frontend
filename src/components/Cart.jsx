import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const { user, cart, setCart } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const increment = (id, qty) => {
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty + 1 } : product
    );
    setCart(updatedCart);
  };

  const decrement = (id, qty) => {
    if (qty <= 1) return;
    const updatedCart = cart.map((product) =>
      product._id === id ? { ...product, qty: qty - 1 } : product
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    setOrderValue(
      cart.reduce((sum, value) => sum + value.qty * value.price, 0)
    );
  }, [cart]);

  const placeOrder = async () => {
    try {
      const url = `${API_URL}/api/orders`;
      const newOrder = {
        userId: user._id,
        email: user.email,
        orderValue,
        items: cart,
      };
      await axios.post(url, newOrder);
      setCart([]);
      Navigate("/order");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h2>🛒 My Cart</h2>
        {error && <p className="error-msg">{error}</p>}

        {cart &&
          cart.map(
            (value) =>
              value.qty > 0 && (
                <li key={value._id} className="cart-item">
                  <span className="product-name">{value.productName}</span>
                  <span className="product-price">₹{value.price}</span>
                  <div className="qty-controls">
                    <button onClick={() => decrement(value._id, value.qty)}>-</button>
                    <span className="qty">{value.qty}</span>
                    <button onClick={() => increment(value._id, value.qty)}>+</button>
                  </div>
                  <span className="product-total">₹{value.price * value.qty}</span>
                </li>
              )
          )}

        <h5>Order Value: ₹{orderValue}</h5>

        <p className="action-buttons">
          {user?.token ? (
            <button onClick={placeOrder} className="place-order-btn">
              Place Order
            </button>
          ) : (
            <button onClick={() => Navigate("/login")} className="place-order-btn">
              Login to Order
            </button>
          )}
        </p>
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../App";
// import axios from "axios";
// import "./Cart.css"
// export default function Cart() {
//   const { user, cart, setCart } = useContext(AppContext);
//   const [orderValue, setOrderValue] = useState(0);
//   const [error, setError] = useState();
//   const Navigate = useNavigate();
//   const API_URL = import.meta.env.VITE_API_URL;
//   const increment = (id, qty) => {
//     const updatedCart = cart.map((product) =>
//       product._id === id ? { ...product, qty: qty + 1 } : product
//     );
//     setCart(updatedCart);
//   };

//   const decrement = (id, qty) => {
//     const updatedCart = cart.map((product) =>
//       product._id === id ? { ...product, qty: qty - 1 } : product
//     );
//     setCart(updatedCart);
//   };

//   useEffect(() => {
//     setOrderValue(
//       cart.reduce((sum, value) => {
//         return sum + value.qty * value.price;
//       }, 0)
//     );
//   }, [cart]);

//   const placeOrder = async () => {
//     try {
//       const url = `${API_URL}/api/orders`;
//       const newOrder = {
//         userId: user._id,
//         email: user.email,
//         orderValue,
//         items: cart,
//       };
//       const result = await axios.post(url, newOrder);
//       setCart([])
//       Navigate("/order");
//     } catch (err) {
//       console.log(err);
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div className="cart-wrapper">
//       <div className="cart-container">
//       <h2>My Cart</h2>
//       {error}
//       {cart &&
//         cart.map(
//           (value) =>
//             value.qty > 0 && (
//               <li key={value._id}>
//                 {value.productName}-{value.price}-
//                 <button onClick={() => decrement(value._id, value.qty)}>
//                   -
//                 </button>
//                 {value.qty}
//                 <button onClick={() => increment(value._id, value.qty)}>
//                   +
//                 </button>
//                 -{value.price * value.qty}
//               </li>
//             )
//         )}
//       <h5>Order Value:{orderValue}</h5>
//       <p>
//         {user?.token ? (
//           <button onClick={placeOrder}>Place Order</button>
//         ) : (
//           <button onClick={() => Navigate("/login")}>Login to Order</button>
//         )}
//       </p>
//     </div>
//     </div>
//   );
// }