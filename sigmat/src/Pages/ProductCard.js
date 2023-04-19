import React from "react";
import "./ProductCard.css";
import axios from "axios";
function ProductCard(props) {
  const { name, price, image, _id } = props.data;
  const addToCart = async (pid) => {
    await axios
      .put(`http://localhost:4000/products/add/${pid}`)
      .then(() => {
        window.alert("Item added to cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">Price: {price}</p>
        <button onClick={() => addToCart(_id)}>ADD</button>
      </div>
    </div>
  );
}

export default ProductCard;
