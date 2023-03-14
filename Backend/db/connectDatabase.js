const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://ramanp4718:DlOZ5QSeW69nn4M7@cluster0.td4mz23.mongodb.net/zoomcarapi"
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to Database");
  }
}

module.exports = connectDatabase;
