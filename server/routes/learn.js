const express = require("express");
const { contentCard, subContent } = require("../data/learn.json");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("learn", {
      contentCard,
      subContent,
    });
  });

  return router;
};
