const mongoose = require("mongoose");
const { stringify } = require("querystring");

const Schema = mongoose.Schema; //fn to create a new schema

const requestSchema = new Schema(
  {
    courseId: {
        type: mongoose.Types.ObjectId,
        ref: "courseModel",
      },
    courseTitle: {
        type: String
      },
    cTraineeId: {
        type: mongoose.Types.ObjectId,
        ref: "cTraineeModel",
      },
    cTraineeName: {
        type: String
      },
    status: {
        type: String,
        default: "pending"
      },
    iTraineeId: {
      type: mongoose.Types.ObjectId,
      ref: "iTraineeModel",
    },
    iTraineeName: {
      type: String
    },
    requestType: {
      type: String,
      enum: ["access", "refund", "null"],
      default: "access"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);