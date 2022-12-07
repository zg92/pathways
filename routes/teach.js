const express = require("express");

const router = express.Router();

const subContent = [
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock4.jpg">',
    title: "Understand Your Revenue",
    text: "Many learning platforms make predicting how much you will make from learners purchasing or watching your content opaque. In some cases, platforms control pricing and can change them unpredictably. <br /> <br />Pathways offers a standardized revenue model and the tools to monitor performance.",
  },
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock5.jpg">',
    title: "Make Content in a Fraction of the Time",
    text: "Leverage cutting edge video and audio creation tools to speed up the content creation process at your discretion. Focus on producing shorter, high quality content and share your knowledge with the world.",
  },
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock6.jpg">',
    title: "Iterate Easily",
    text: "The hefty length of many classes on leading learning platforms make updating and iterating on past content hard. The lesson format on Pathways makes modification or replacement a breeze, enabling you to focus on creating more content and earning more.",
  },
];

router.get("/", (req, res) => {
  res.render("teach", {
    title: "Become a Teacher",
    text: "The current learning platform industry isn't working. Only 5% of students finish courses, learning platforms can take a huge portion of revenue, and in many cases -- you have to figure everything out yourself. <br /><br /> <i>This all changes now.</i>",
    subContent: subContent,
  });
});

module.exports = router;
