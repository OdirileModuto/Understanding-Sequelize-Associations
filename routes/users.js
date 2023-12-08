const express = require("express");
const userController = require("../controllers/users");
const postController = require("../controllers/post");
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
  .patch(userController.updateUser)
  .delete(userController.removeUser);

router.route("/users/:id/posts").post(postController.addPost);

router
  .route("/users")
  .post(userController.createUser)
  .get(userController.getAllUsers);

module.exports = router;
