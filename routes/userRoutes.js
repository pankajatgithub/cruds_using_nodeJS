const express = require('express');
const app = express();
const {singup,signin} = require("../controller/userController");

const userRoutes = express.Router();

userRoutes.post("/signin",signin);
userRoutes.post("/signup", singup);

module.exports = userRoutes