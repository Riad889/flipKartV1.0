const mongoose = require("mongoose");
const signUpSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    trim: true,
    unique: true,

    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Order",
      required: true,
    },
  ],
});

const signUp_user = mongoose.model("User", signUpSchema);
module.exports = signUp_user;
