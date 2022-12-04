const express = require("express");
require("dotenv").config();
const cors = require("cors");
const featureRouter = require("./routes/features");
const {
  createUserProcess,
  mongoConnect,
} = require("./middleware/mongoose/mongoose");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/features", featureRouter);
app.use(express.json());

mongoConnect();

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", async (req, res) => {
  createUserProcess(req.body.passed_email);
});

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  )
);
