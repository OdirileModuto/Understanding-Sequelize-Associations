const { User, Post } = require("../models");

const postController = {
  getUserPosts: async (req, res) => {
    const userId = req.params.id;

    console.log(req.params.id);

    try {
      const user = await User.findByPk(userId, {
        include: [{ model: Post }],
      });
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = postController;
