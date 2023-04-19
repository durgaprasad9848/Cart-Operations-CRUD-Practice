import React, { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "./CartCard";

function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {data.map((product) => {
          if (product.quantity > 0) {
            return <CartCard key={product._id} product={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Cart;
