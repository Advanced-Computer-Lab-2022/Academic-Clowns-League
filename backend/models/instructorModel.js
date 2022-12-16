const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InstructorSchema = new Schema(
  {
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
    ratings: [ {
      rating: Number,
      userId: String,

      
    }
      ],
      reviews: [
        {
          content: String,
          traineeId: String,
          traineeName: String
        },
      ],
    email: {
      type: String,
      required: true,
    },

    miniBio: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    rating:{
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Instructor", InstructorSchema);

/*const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
   
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    country: {
        type: String,
        required: true
    },
    ratings:{
        type: [Number]
    },
    reviews:{
        type: [String]

    },
    email: {
        type: String,
        required: true
    },
   
   miniBio: {
        type: String
    },
   
}, {timestamps: true})

module.exports = mongoose.model('Instructor', InstructorSchema) */
