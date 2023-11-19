const express = require("express");
const env = require("dotenv");
const favicon = require("serve-favicon");
var path = require("path");
var cors = require("cors");

const todos = require("./src/routes/todos.route");
const { notFoundRoute, errorHandler } = require("./src/configs/errorHandler");
env.config();
const app = express();

const connectDatabase = require("./src/db/connect");
connectDatabase();

app.use(cors());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to TODO Node.js application backend." });
});
app.use(process.env.APP_API_PREFIX, todos);
app.use(notFoundRoute);
app.use(errorHandler);
app.listen(process.env.APP_PORT, () => {
  console.log("TODO-App backend server running on: " + process.env.APP_BASE_URL);
});
