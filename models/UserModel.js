const mongoose = require("mongoose");

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
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
