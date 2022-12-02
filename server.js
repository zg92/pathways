const express = require("express");
const dotenv = require("dotenv");
const routes = require("routes");

dotenv.config({ path: "./config/config.env" });

const router = express.Router();

const app = express();

app.use("/", routes);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
