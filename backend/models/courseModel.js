const mongoose = require("mongoose");

const Schema = mongoose.Schema; //fn to create a new schema

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    hours: {
      //should it be written manually or automatically the total duration of the videos?
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    discountValidUntil: {
      //for requirement 30
      type: Date,
    },

    instructor: {
      type: mongoose.Types.ObjectId,
      ref: "instructorModel",
    },

    /*{
        type: String, //String for now, may later be updated to be of type 'Instructor'
        required: true
    }*/
    summary: {
      type: String,
    },
    previewURL: {
      type: String,
    },
    reviews: {
      type: [String],
    },
    overallRating: {
      type: Number,
    },
    ratings: {
      type: [Number],
    },
    outline: {
      type: String,
    },
    subtitles: [
      {
        title: String,
        videoLink: String,
        shortDescription: String,
        totalHours: Number,
      },
    ],

    /*
    {
        type: [String] //may be changed to Array of subtitles later
    }
    */
    exercises: [
      {
        question: String,
        options: [String],
        answer: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);

module.exports = mongoose.model("Course", courseSchema);

// this create a new schema, and we're passing as an argument an object where we define our schema, what should a typical course object (or document) look like
//the 2nd argument has a timestamps property, it will automatically add a 'create at' property for us when a new document is created and updated

//now we make a model based on the schema
//schema -> defines structure of a document
//model -> applies that schema to a model, and we use that model to interact with a collection of the same name

//model's name is Course singular, will be plural automatically to create a courseS collection for us
//we can import now this Course model in other files to interact with the Courses collection

//we'll use functions like find() on the model itself, not the schema
