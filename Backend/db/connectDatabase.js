const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.set("strictQuery", true);

async function connectDatabase() {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to Database");
  }
}

module.exports = connectDatabase;
