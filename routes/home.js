const express = require("express");
const { createUserProcess } = require("./middleware/mongoose/mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", async (req, res) => {
  createUserProcess(req.body.passed_email);
});

module.exports = router;
