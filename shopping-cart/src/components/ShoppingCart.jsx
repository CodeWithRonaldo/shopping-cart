import React, { useState } from "react";
import Bluetooth from "../assets/images/Bluetooth.jpeg";
import Portable from "../assets/images/Portable-Charger.jpeg";
import Stand from "../assets/images/Smartphone-Stand.jpeg";
import Wireless from "../assets/images/Wireless-Headphones.jpeg";
import USB from "../assets/images/USB-Cable.jpeg";

const initialCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 1,
    image: Wireless,
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: 15.99,
    quantity: 1,
    image: Stand,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 29.99,
    quantity: 1,
    image: Bluetooth,
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 19.99,
    quantity: 1,
    image: Portable,
  },
  {
    id: 5,
    name: "USB-C Cable",
    price: 8.99,
    quantity: 1,
    image: USB,
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart);

  const increment = (id) => {
    setCart((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decrement = (id) => {
    setCart((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return (item.price * item.quantity).toFixed(2);
  };
  const total = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container">
      <div>
        <h1>Shopping Cart</h1>
      </div>

      <div className="items">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="product">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </td>
                  <td>${item.price}</td>
                  <td className="quantity-btn">
                    <button onClick={() => increment(item.id)}>+</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => decrement(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="cart-total">
          <div className="coupon">
            <p>Promotion Code</p>
            <input type="text" placeholder="Coupon Code" />
            <button className="coupon-btn">Apply Coupon</button>
          </div>
          <div>
            <div className="cart-total-container">
              <p className="total-text">Cart Totals</p>
            </div>
            <div className="table-cart">
              <table>
                <tr>
                  <th>Subtotal</th>
                  <td>{calculateSubtotal}</td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td>{total}</td>
                </tr>
              </table>
              <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
