import React, { useState } from "react";
import Bluetooth from "../assets/images/Bluetooth.jpeg";
import Portable from "../assets/images/Portable-Charger.jpeg";
import Stand from "../assets/images/Smartphone-Stand.jpeg";
import Wireless from "../assets/images/Wireless-Headphones.jpeg";
import USB from "../assets/images/USB-Cable.jpeg";

const CartItems = [
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
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

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
            {CartItems.map((item) => {
              return (
                <tr>
                  <td className="product">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </td>
                  <td>${item.price}</td>
                  <td className="quantity-btn">
                    <button onClick={increment}>+</button>
                    <p>{count}</p>
                    <button onClick={decrement}>-</button>
                  </td>
                  <td>${item.price * item.quantity}</td>
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
                  <td>$400.00</td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td>$400.00</td>
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
