import React, { useState } from "react";
import "./CartCard.css";
import axios from "axios";

function CartCard(props) {
  const { _id, name, quantity: initialQuantity, price, image } = props.product;

  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAddToCart = () => {
    axios
      .put(`http://localhost:4000/products/add/${_id}`)
      .then((res) => {
        setQuantity(quantity + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteFromCart = () => {
    axios
      .put(`http://localhost:4000/products/delete/${_id}`)
      .then((res) => {
        setQuantity(quantity - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cart-card">
      <img className="cart-image" src={image} alt={name} />
      <h2 className="cart-name">{name}</h2>
      <p className="cart-quantity">Quantity: {quantity}</p>
      <p className="cart-price">Price: ${price}</p>
      <div className="cart-buttons">
        <button className="add-to-cart" onClick={handleAddToCart}>
          One more
        </button>
        <button
          className="delete-from-cart"
          onClick={handleDeleteFromCart}
          disabled={quantity === 0}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartCard;
