const express = require("express");

const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/productModel");
router.post("/", (req, res) => {
  console.log(req.body);

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    color: req.body.color,
    brand: req.body.brand,
    img: req.body.img,

    department: req.body.department,
    size: req.body.size,
  });
  return product.save();

  // .then(result => {
  // console.log('result', result)
  // res.status(200).json({
  //     message: "successfully added a product",
  //     createdProduct: {
  //         name: result.name,
  //         price: result.price,
  //         description: result.description,
  //         category: result.category,
  //         color: result.color,
  //         brand: result.brand,
  //         _id: result.id,
  //         img: result.img,
  //         date: result.date,
  //         department: result.department,
  //         size: result.size,

  //     }
  // });
  // })
  // .catch(err => {
  // console.log(err)
  // res.status(500).json({
  //     error: err
  // });
  // });
});

module.exports = router;
