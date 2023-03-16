const express = require("express");
const connectDatabase = require("./db/connectDatabase");
const morgan = require("morgan");
const cors = require("cors");
const carsRouter = require("./routes/Cars.routes");
const userRoutes = require("./routes/Users.routes");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/cars", carsRouter);
app.use("/users", userRoutes);
app.use(morgan("tiny"));

connectDatabase().then(() => {
  app.listen(3001, () => {
    console.log("Server listening on http://localhost:3001");
  });
});
