const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please enter username"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter email"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please enter password"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
