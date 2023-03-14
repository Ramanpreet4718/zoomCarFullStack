const express = require("express");
const connectDatabase = require("./db/connectDatabase");
const morgan = require("morgan");
const Car = require("./db/Cars.model");
const carsRouter = require("./routes/Cars.routes");
const userRoutes = require("./routes/Users.routes");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/cars", carsRouter);
app.use("/users", userRoutes);

connectDatabase().then(() => {
  app.listen(3001, () => {
    console.log("Server listening on http://localhost:3001");
  });
});
