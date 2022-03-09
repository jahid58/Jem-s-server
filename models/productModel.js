const mongoose = require("mongoose");
const ReviewsModel = require("./ReviewsModel");
const Reviews = require("./ReviewsModel");

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
  gender: {
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
  material: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: {
    type: Date,
  },
  id: {
    type: Schema.Types.ObjectId,
  },
  discount: {
    type: Schema.Types.Mixed,
    required: false,
  },
  // additionalInfo:{
  //   type: Schema.Types.Mixed,
  //   required: false,
  // }
  reviews: {
    type: [
      {
        reviewer: { type: String, required: true },
        comment: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        date: {
          type: String,
        },
      },
    ],
    required: false,
  },
});
module.exports = mongoose.model("Product", productSchema);
