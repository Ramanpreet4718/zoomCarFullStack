const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    phone: { type: String, require: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
