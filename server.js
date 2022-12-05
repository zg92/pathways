const express = require("express");
require("dotenv").config();
const cors = require("cors");
const featureRouter = require("./routes/features");
const { mongoConnect } = require("./middleware/mongoose/mongoose");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", featureRouter);
app.use("/features", featureRouter);
app.use("/teach", featureRouter);
app.use("/learn", featureRouter);
app.use(express.json());

mongoConnect();

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  )
);
