const express = require("express");
const createUserProcess = require("../database/mongoose");
const pageData = require("../data/home.json");

const router = express.Router();
router.use(express.json());

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("home", pageData);
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

  return router;
};
