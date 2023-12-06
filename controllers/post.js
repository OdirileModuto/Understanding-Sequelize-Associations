const { User, Post } = require("../models");

const postController = {
  getUserPosts: async (req, res) => {
    const userId = req.params.user_id;

    try {
      const user = await User.findByPk(userId, {
        include: [{ model: Post, as: "posts" }],
      });
    } catch (err) {}
  },
};
