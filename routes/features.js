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
    text: "Create paths tailor made for your goals",
  },
];

const subContent = [
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock/sub-content-stock1.jpg">',
    title: "Great Journeys Are Not a Straight Line",
    text: "Pathways is the foundry to give you full control over your learning journey. Build knowledge one class at a time and decide the next step or let Pathways help you decide.<br /><br /> Learning has never been so smart.",
  },
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock/sub-content-stock2.jpg">',
    title: "Do More, Spend Less Time",
    text: "Not every aspect of creating great content requires extensive resources. Pathways gives you the tools to write, record, and distribute content to empower humanity to learn.<br /><br /> Earn revenue based off of students for your content.",
  },
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock/sub-content-stock3.jpg">',
    title: "Empower Students and Earn Revenue",
    text: "We don't discount your creations and we get it infront of people that need it most. You control how your work is distributed which can be monitored through detailed analytics",
  },
];

router.get("/", (req, res) => {
  res.render("features", {
    title: "The Learning Platform of the Future",
    text: "Lectures and frustratingly long videos on your favorite topics are a thing of the past. Pathways is the future.<br /><br /> Pathways leverages the latest ML technology to enable new ways to create and deliver learning content.",
    cards: cards,
    subContent: subContent,
  });
});

module.exports = router;
