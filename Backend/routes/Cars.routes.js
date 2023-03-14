const express = require("express");
const { getData } = require("../controllers/Cars.controllers");

const carsRouter = express.Router();

carsRouter.get("/", async (req, res) => {
  const query = req.query;
  const data = (await getData(query)) || [];
  res.send({
    data,
  });
});

module.exports = carsRouter;
