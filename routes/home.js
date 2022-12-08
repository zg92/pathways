const express = require("express");
const { createUserProcess } = require("../middleware/mongoose/mongoose");

const router = express.Router();
router.use(express.json());

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("home", {
      title: "Experience Learning 2.0",
      text: "Pathways is the future of learning <i>anything</i>.<br /><br /> Join the newsletter to find out how you can get early access.",
    });
  });

  router.post("/", async (req, res) => {
    const createUser = await createUserProcess(req.body.passed_email);
    if (createUser) {
      res.status(200).json({
        success: true,
        message: "Thank you for your interest in Pathways!",
      });
    }
    if (!createUser) {
      res.status(400).json({
        success: false,
        message: "Sorry, your email could not be registered",
      });
    }
  });

  module.exports = router;
};
