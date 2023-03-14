const express = require("express");
const { handleLogIn } = require("../controllers/Users.controllers");
const userRoutes = express.Router();

userRoutes.post("/login", async (req, res) => {
  try {
    const { name, phone } = req.body;
    let status = await handleLogIn(name, phone);

    res.send(status);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
});

module.exports = userRoutes;
