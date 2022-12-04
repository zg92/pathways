const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGOOSE_CREDENTIALS}@cluster1.4nl701c.mongodb.net/?retryWrites=true&w=majority`;

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

const checkEmail = async (passedEmail) => {
  const userSearch = await User.find({ email: passedEmail });
  if (userSearch.length > 0) return;
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
  await checkEmail(passedEmail);
  await createUser(passedEmail);
};

module.exports = { createUserProcess, mongoConnect };
