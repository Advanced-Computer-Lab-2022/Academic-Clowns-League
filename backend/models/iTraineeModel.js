const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const iTraineeSchema = new Schema(
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
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
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
    courses: [{
        type: mongoose.Types.ObjectId,
        ref:'courseModel'
      }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("iTrainee", iTraineeSchema);
