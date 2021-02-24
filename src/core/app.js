const express = require("express");
const userRouter = require("../domain/userRouter");
const errorHandling = require("./errors/errorHandling");

const app = express();

app.use(userRouter);
app.use(errorHandling);

module.exports = app;
