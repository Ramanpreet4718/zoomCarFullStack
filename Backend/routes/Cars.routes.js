const express = require("express");
const { getData, getCarDataByID } = require("../controllers/Cars.controllers");

const carsRouter = express.Router();

carsRouter.get("/", async (req, res) => {
  try {
    const query = req.query;
    const data = (await getData(query)) || [];
    res.send({
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Something went wrong",
      log: error,
    });
  }
});

carsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = (await getCarDataByID(id)) || [];
    res.send({
      car_data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Something went wrong",
      log: error,
    });
  }
});

module.exports = carsRouter;
