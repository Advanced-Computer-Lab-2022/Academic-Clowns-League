const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const iTraineeSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
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
    grades: [{
      courseID: mongoose.Types.ObjectId,
      exercises: [{
        exerciseID: mongoose.Types.ObjectId,
        grade: Number
      }]
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("iTrainee", iTraineeSchema);
