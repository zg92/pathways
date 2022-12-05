const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("teach");
});

module.exports = router;
