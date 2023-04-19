import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductCard.css";
import { Card } from "react-bootstrap";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card>
      <div className="cards-container">
        <h1>Products</h1>
        {data.map((product) => (
          <ProductCard key={product._id} data={product} />
        ))}
      </div>
    </Card>
  );
}

export default Products;
