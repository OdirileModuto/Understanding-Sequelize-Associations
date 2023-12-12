const { User } = require("../models");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({});
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getUserById: async (req, res) => {
    try {                                         
      const userId = req.params.id;

      const users = await User.findByPk(userId);
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "internal Server Error " });
    }
  },
  createUser: async (req, res) => {
    const { name, surname } = req.body;

    try {
      const newUser = await User.create({ name, surname });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ error: "Bad Request" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, surname } = req.body;

      const updateUser = await User.update(
        {
          name: name,
          surname: surname,
        },
        {
          where: {
            id: userId,
          },
        }
      );

      if (updateUser[0] === 1) {
        const users = await User.findAll({});

        res.status(200).json(users);
      } else {
        res.status(200).json({ message: "Not updated" });
      }
    } catch (error) {
      console.log("Error creating user:", error);
      res.status(400).json({ error: "Bad Request" });
    }
  },
  removeUser: async (req, res) => {
    try {
      const userId = req.params.id;

      const newUser = await User.destroy({
        where: {
          id: userId,
        },
      });

      res.status(204).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ error: "Bad Request" });
    }
  },
};

module.exports = userController;
