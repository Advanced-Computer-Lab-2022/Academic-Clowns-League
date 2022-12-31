const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cTraineeSchema = new Schema(
  {
    firstname: {
      type: String,
      //required: true,
    },
    lastname: {
      type: String,
      //required: true,
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
      //required: true,
    },
    courses: [
      {
        type: mongoose.Types.ObjectId,
        ref: "courseModel",
      },
    ],
    grades: [
      {
        courseID: mongoose.Types.ObjectId,
        exercises: [
          {
            exerciseID: mongoose.Types.ObjectId,
            grade: Number,
          },
        ],
      },
    ],

    corporate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cTrainee", cTraineeSchema);
