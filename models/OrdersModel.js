const mongoose = require("mongoose");
const Product = require("./productModel");
const Schema = mongoose.Schema;
const userSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  paymentId: String,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  products: {
    type: Schema.Types.Mixed,
    ref: Product,
  },
});
module.exports = mongoose.model("Orders", userSchema);
