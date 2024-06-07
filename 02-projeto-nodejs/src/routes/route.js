const express = require("express");
const {
  RegisterUserController,
} = require("../controllers/registerUserController");
const registerUser = new RegisterUserController();
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/contato", (req, res) => {
  res.render("contato");
});

route.get("/produtos", (req, res) => {
  res.render("produtos");
});

route.get("/login", (req, res) => {
  res.render("login");
});

route.get("/register", registerUser.getRegister);

route.post("/register", registerUser.store);

module.exports = route;
