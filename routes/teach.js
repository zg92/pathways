const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("teach", {
    title: "Become a Teacher",
    text: "The current learning platform industry isn't working. Only 5% of students finish courses, learning platforms can take a huge portion of revenue, and in many cases -- you have to figure everything out yourself. <br /><br /> <i>This all changes now.</i> <br /><br /> Pathways equips teachers with state-of-the-art tools to quickly create and distribute ML generated content that students can access when they need it most. Imagine leveraging the most cutting edge tools in one platform to share what you know and move humanity’s collective knowledge forward. <br /><br /> Pathway’s goal is to enable <i>anyone</i> to become a teacher. ",
  });
});

module.exports = router;
