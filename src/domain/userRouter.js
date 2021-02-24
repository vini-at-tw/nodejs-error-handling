const express = require("express");
const usersService = require("./usersService");

const router = express.Router();

router.get("/users", (req, res) => {
  const users = usersService.getUsers();
  res.json({ users });
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await usersService.getUserById(parseInt(req.params.id));
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
