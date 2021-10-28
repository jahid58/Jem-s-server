const mongoose = require("mongoose");
const Product = require("./productModel");
const Schema = mongoose.Schema;
const userSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: Product,
  },
});
module.exports = mongoose.model("Orders", userSchema);
