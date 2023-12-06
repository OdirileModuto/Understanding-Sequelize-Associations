const express = require("express");

const { postController } = require("../controllers/post");

const router = express.Router({ mergeParams: true });

route.Router("/:user_id/posts").get(postController.getUserPosts);

module.exports = router;
