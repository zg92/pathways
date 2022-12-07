const express = require("express");

const router = express.Router();

const subContent = [
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock/sub-content-stock7.jpg">',
    title: "Pick Your Path",
    text: "The path to learning about a topic often requires cobbling together multiple sources of knowledge. Pathways let's <i>you</i> pick your path.<br /><br /> Whether you want to let Pathways' cutting edge AI design a path for you based on the path others have taken or design your own, it's completely up to you.",
  },
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock/sub-content-stock8.jpg">',
    title: "Consume Quickly",
    text: "Learning takes time, but it doesn't have to take so much time.<br /><br /> Pathways' class structures are designed to be quick to consume, letting you learn what you need-- then move on to the next lesson or apply what you've learned. ",
  },
  {
    img: '<img  class="sub-content-image" src="../img/sub-content-stock/sub-content-stock9.jpg">',
    title: "Rate Your Path",
    text: "Pathways embeds a real time feedback loop into its content. If you didn't feel a class was effective at conveying its message, let Pathways know to enable its database of knowledge to continue to improve.",
  },
];

router.get("/", (req, res) => {
  res.render("learn", {
    title: "Learn Smarter",
    text: "The web contains so much knowledge. Consuming this knowledge is hard. <br /><br /> The quality of content offered on most platforms vary and many courses are hours long. Many learners lose interest due to the extensive course length and teaching style or quit once they learn the small bit they were looking for. <br /><br /> Imagine learning web development or art from multiple teachers and the ability to string together micro-classes into customized learning paths.<br /> <br /> <i>Learning has never been so smart.</i>",
    subContent: subContent,
  });
});

module.exports = router;
