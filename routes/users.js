const express = require("express");
const { createUser } = require("../controllers/users");
// const {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } = require("../users");

const router = express.Router({ mergeParams: true });

router.route("/users").post(createUser);

// router.route("/users/:id/posts").get(getUserPost).post(createPost);

module.exports = router;
