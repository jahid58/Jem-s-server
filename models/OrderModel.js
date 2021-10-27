const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const orderSchema = Schema({
  productId: {
    type: [String],
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Order", orderSchema);
