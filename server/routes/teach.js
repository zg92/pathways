const express = require("express");
const { contentCard, subContent } = require("../data/teach.json");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("teach", {
      contentCard,
      subContent,
    });
  });

  return router;
};
