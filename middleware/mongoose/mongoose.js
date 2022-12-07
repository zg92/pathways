const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGOOSE_URI;

const mongoConnect = async () => {
  try {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to Mongo!"));
  } catch (e) {
    console.log("Could not connect:", e);
  }
};

const emailSchema = new mongoose.Schema({
  date: Date,
  email: String,
});

const User = mongoose.model("User", emailSchema);

const regexCheck = async (passedEmail) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );
  return emailRegex.test(passedEmail);
};

const searchExisting = async (passedEmail) => {
  const userSearch = await User.find({ email: passedEmail });
  if (userSearch.length > 0) return true;
  else return false;
};

const createUser = async (passedEmail) => {
  try {
    const newUser = new User({
      date: new Date().toLocaleString().split(",")[0],
      email: passedEmail,
    });
    await newUser.save();
    console.log(`User created with email: ${passedEmail}`);
  } catch (e) {
    console.log("Could not create user:", e);
  }
};

const createUserProcess = async (passedEmail) => {
  const regex = await regexCheck(passedEmail);
  const existing = await searchExisting(passedEmail);
  // console.log("regex:", regex, "existing", existing);
  if (regex === true && existing === false) {
    createUser(passedEmail);
    return true;
  }
  return false;
};

module.exports = { createUserProcess, mongoConnect };
