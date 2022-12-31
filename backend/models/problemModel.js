const mongoose = require("mongoose");
const { stringify } = require("querystring");
const internal = require("stream");

const Schema = mongoose.Schema;

const problemSchema = new Schema(
    {
      type: {
        type: String,
        required: true,
      },
      content: {
       
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
        default: "Unseen",
      },
      courseId: {
        type: String,
      },
     reporterId: {
        type: String,
      },

       course: {
        type: Object,
      },

      reporter: {
        type: Object,
      },

      followUp: {
        
        type: String,
        default:"",
        },

        priority: {
        
          type:Number,
          required: true,
          default: Infinity,
          },
  
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Problem", problemSchema);
  