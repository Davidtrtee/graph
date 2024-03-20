const {
  register,
  login,
  getAllUsers,
  getUserById,
} = require("../Controller/AuthController");
const AuthRoutes = require("express").Router();
AuthRoutes.post("/register", register);
AuthRoutes.post("/login", login);
AuthRoutes.get("/users", getAllUsers);
AuthRoutes.get("/users/:id", getUserById);

module.exports = AuthRoutes;
