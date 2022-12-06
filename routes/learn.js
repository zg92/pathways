const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("learn", {
    title: "Learn Smarter with Pathways",
    text: "The web contains so much knowledge. Consuming this knowledge and truly learning is hard. <br /><br /> The quality of content offered on most platforms vary and many courses are hours long. There is a reason that only 5% of students actually finish courses they purchase on many of the top learning platforms. Many learners lose interest due to the extensive course length and teaching style or quit once they learn the small bit they were looking for. <br /><br /> Pathways’ goal is to solve this by giving teachers the ability to generate high quality micro-classes covering any topic and give learners the freedom and tools to define their learning journey.<br /><br /> Imagine learning web development or art from multiple teachers and the ability to string together micro-classes into learning customized paths. <i>Learning has never been so smart.</i>",
  });
});

module.exports = router;
