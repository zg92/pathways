const Email = require("../models/emailModel");

const regexCheck = async (passedEmail) => {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );
  return emailRegex.test(passedEmail);
};

const searchExisting = async (passedEmail) => {
  const userSearch = await Email.find({ email: passedEmail });
  if (userSearch.length > 0) return true;
  else return false;
};

const createUser = async (passedEmail) => {
  try {
    const newUser = new Email({
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
  if (regex === true && existing === false) {
    createUser(passedEmail);
    return true;
  }
  return false;
};

module.exports = createUserProcess;
