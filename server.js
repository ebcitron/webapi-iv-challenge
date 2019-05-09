// Pull in posts/users and set up express
const express = require("express");
const helmet = require("helmet");

const postsRouter = require("./data/helpers/postsRouter");
const usersRouter = require("./data/helpers/usersRouter");

const server = express();
server.use(express.json());
server.use(helmet());

// write name case middleware

//set up user endpoints
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.send("Welcome to my app");
});

module.exports = server;
