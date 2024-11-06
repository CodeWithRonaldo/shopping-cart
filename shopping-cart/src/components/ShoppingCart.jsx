import React from "react";
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
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
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
                  <td>
                    <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                  </td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
