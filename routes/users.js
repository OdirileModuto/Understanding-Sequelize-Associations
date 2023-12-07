const express = require("express");
const userController = require("../controllers/users");
// const {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../users");

const router = express.Router();

router
  .route("/users/:id")
  .get(userController.getUserById)
  .patch(userController.updateUser);

router
  .route("/users")
  .post(userController.createUser)
  .get(userController.getAllUsers);

module.exports = router;
