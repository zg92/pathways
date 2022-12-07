const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Experience Learning 2.0",
    text: "Pathways is the future of learning <i>anything</i>.<br /><br /> Join the newsletter to find out how you can get early access.",
  });
});

module.exports = router;
