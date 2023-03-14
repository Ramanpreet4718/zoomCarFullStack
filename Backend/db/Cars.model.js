const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    brand: { type: String, require: true },
    image_url: { type: String, require: true },
    location: {
      lat: { type: Number, require: true },
      lng: { type: Number, require: true },
      distance: { type: Number, require: true },
      text: { type: String, require: true },
    },
    pricing: {
      actual_amount: { type: String, require: true },
      payable_amount: { type: String, require: true },
      price_per_hour: { type: Number, require: true },
    },
    accessories: { type: [String], require: true },
    rating: {
      icon: { type: String, require: true },
      text: { type: String, require: true },
      text1: { type: Number, require: true },
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("cars", CarSchema);

module.exports = Car;
