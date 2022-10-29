const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cTraineeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    credNumber: {
      type: String,
    },
    credCCV: {
      type: String,
    },
    credExpDate: {
      type: Date,
    },
    courses: {
      type: [String], //may be changed later to an array of objects: progress, grade, etc.
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cTrainee", cTraineeSchema);
