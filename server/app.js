const express = require("express");
require("dotenv").config();
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const helmet = require("helmet");
const connectDB = require("./database/db");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("public"));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      scriptSrc: ["'self'", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/"],
    },
  })
);
app.use(compression());

app.use("/", routes());

connectDB();

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  )
);
