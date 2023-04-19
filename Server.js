const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cartModel = require("./CatModelDB/cartModel");

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  try {
    const products = await cartModel.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/products/add/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await cartModel.findById(id);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    cartItem.quantity = cartItem.quantity + 1;
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/products/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await cartModel.findById(id);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    cartItem.quantity = cartItem.quantity - 1;
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://kanakadurgaprasadp:Prasad123@prasad.mqb92v4.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(4000, () => {
      console.log("hi prasad. Welcome to backend");
    });
  })
  .catch((error) => {
    console.log(error);
  });
