const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const compression = require("compression");
const featureRouter = require("./routes/features");
const homeRouter = require("./routes/home");
const learnRouter = require("./routes/learn");
const teachRouter = require("./routes/teach");
const { mongoConnect } = require("./middleware/mongoose/mongoose");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(compression());

app.use("/", homeRouter);
app.use("/features", featureRouter);
app.use("/teach", teachRouter);
app.use("/learn", learnRouter);

mongoConnect();

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  )
);
