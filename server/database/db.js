const mongoose = require("mongoose");
// require("dotenv").config();

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGOOSE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to Mongo!"));
  } catch (e) {
    console.log("Could not connect:", e);
  }
};

module.exports = connectDB;
