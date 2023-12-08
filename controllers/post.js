const { User, Post } = require("../models");

const postController = {
  getUserPosts: async (req, res) => {
    const userId = req.params.id;

    console.log(req.params.id);

    try {
      const user = await User.findByPk(userId, {
        include: [{ model: Post }],
      });

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
  addPost: async (req, res) => {
    const userId = req.params.id;

    const { title, body } = req.body;

    try {
      // check if user id exist before inserting
      const post = await Post.create({
        user_id: parseInt(userId),
        title: title,
        body: body,
      });
      res.status(200).json(post);
    } catch (error) {
      console.error("Error Fetching users:", error);
      res.status(400).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = postController;
