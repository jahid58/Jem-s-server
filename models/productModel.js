const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: {
    type: Date,
  },
  id: {
    type: Schema.Types.ObjectId,
  },
});
module.exports = mongoose.model("Product", productSchema);
