const User = require("../db/User.model");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

function generateAuthToken(user) {
  console.log(user._id);
  let payload = {
    id: user._id,
    name: user.name,
    phone: user.phone,
  };

  return jwt.sign(payload, config.JWT_SECRET);
}

function verifyToken(token) {
  const payload = jwt.verify(token, config.JWT_SECRET);

  return payload;
}

async function handleLogIn(name, phone) {
  console.log(name, phone);
  let user = await User.findOne({ name: name, phone: phone });
  if (user) {
    let token = generateAuthToken(user);
    return { token, message: "Logging in Successfully" };
  } else {
    let new_User = await User.create({ name, phone });
    let token = generateAuthToken(new_User);
    return { token, message: "User Created and Logging in Successfully" };
  }
}

async function getUserById(id) {
  let user = User.findById(id);

  return user;
}

async function checkLogIn(req, res, next) {
  try {
    const headers = req.headers;
    const authHeader = headers["authorization"];

    if (authHeader) {
      const token = authHeader.split(" ").pop();

      const payload = verifyToken(token);

      const user = await getUserById(payload.id);

      req.loggedInUser = user;

      next();
    } else {
      return res.status(400).send({
        message: "User is not logged in",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Something went wrong",
    });
  }
}

module.exports = { handleLogIn, verifyToken, checkLogIn };
