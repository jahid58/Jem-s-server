const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ReviewSchema = Schema({
  reviewer: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Reviews", ReviewSchema);
