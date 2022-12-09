const express = require("express");
const { contentCard, cards, subContent } = require("../data/features.json");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("features", { contentCard, cards, subContent });
  });

  return router;
};
