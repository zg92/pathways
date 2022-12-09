const express = require("express");
const router = express.Router();

const homeRoute = require("./home");
const featuresRoute = require("./features");
const learnRoute = require("./learn");
const teachRoute = require("./teach");

module.exports = () => {
  router.use("/", homeRoute());
  router.use("/features", featuresRoute());
  router.use("/teach", teachRoute());
  router.use("/learn", learnRoute());

  return router;
};
