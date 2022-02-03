const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required for every user."],
  },
  email: {
    type: String,
    required: [true, "Email is required for every user."],
    lowercase: true,
  },
  referredUser: {
    type: String,
  },
  isPaymentMade: {
    type: Boolean,
    default: false,
  },
  totalEarnings: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
