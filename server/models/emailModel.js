const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    trim: true,
    maxlength: [50, "Email can not be more than 50 characters"],
  },
});

EmailSchema.pre("save", function () {
  const currentDate = new Date().toLocaleString().split(",")[0];
  this.date = currentDate;
});

module.exports = mongoose.model("email", EmailSchema);
