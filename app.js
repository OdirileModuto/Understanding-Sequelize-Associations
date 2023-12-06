const { sequelize } = require("./models");
const express = require("express");
const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());
app.use("/", [userRoutes]);

// app.post("/users", async (req, res) => {
//   const { id, name, surname } = req.body;

//   try {
//     const user = await User.create({ id, name, surname });

//     return res.json(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json(err);
//   }
// });

// const { Sequelize } = require("sequelize");
// const config = require("./config");

// const sequelize = new Sequelize(config.development);

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database connected");
});
