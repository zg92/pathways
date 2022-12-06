const express = require("express");

const router = express.Router();

const cards = [
  {
    img: '<img class="feature-card-img" src="./img/speedometer2.svg"></img>',
    text: "Create content in quickly with ML",
  },
  {
    img: '<img class="feature-card-img" src="./img/percent.svg"></img>',
    text: "Learn a new skill in a fraction of the time",
  },
  {
    img: '<img class="feature-card-img" src="./img/map.svg"></img>',
    text: "Create custom paths tailor made for your goals",
  },
];

router.get("/", (req, res) => {
  res.render("features", {
    title: "The Learning Platform of the Future",
    text: "Lectures and frusteratingly long videos on your favorite topics are a thing of the past. Pathways is the future.<br /><br /> Pathways leverages the latest ML technology to enable new ways to create and deliver learning content.",
    cards: cards,
  });
});

module.exports = router;
