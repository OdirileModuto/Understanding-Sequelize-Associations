const express = require("express");

const postController = require("../controllers/post");

const router = express.Router({ mergeParams: true });

router.route("/users/:id/posts").get(postController.getUserPosts);

module.exports = router;
