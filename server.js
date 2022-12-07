const express = require("express");
require("dotenv").config();
const cors = require("cors");
const featureRouter = require("./routes/features");
const homeRouter = require("./routes/home");
const learnRouter = require("./routes/learn");
const teachRouter = require("./routes/teach");
const emailRouter = require("./routes/email");
const { mongoConnect } = require("./middleware/mongoose/mongoose");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", homeRouter);
app.use("/email", emailRouter);
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
