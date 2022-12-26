const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
        type: String,
        enum: ["cTrainee", "iTrainee","Instructor","Admin"],
        default: "iTrainee",
      },
      contract :{
        type: Boolean,
        default:false

      },
      email: {
        type: String,
        required: false,
      },
   
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema);
