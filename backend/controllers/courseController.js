//import the model
const Course = require("../models/courseModel");
const iTrainee = require("../models/iTraineeModel");
const cTrainee = require("../models/cTraineeModel");
const Instructor = require("../models/instructorModel");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const Admin = require("../models/adminModel");
//const user = require("../models/userModel");

const PDFDocument = require("pdfkit");
const { listeners } = require("process");
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

//get all courses
const getAllCourses = async (req, res) => {
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $match: { $and: [ {published: true}, {open: true} ]}
    }
  ]);
  res.status(200).json(courses);
};

getInstUnpub = async(req, res) => {
  if(await Instructor.findById(req.user._id)){
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: { $and: [{"instructorData.name": req.user.name }, {published: false}] },
      },
    ]);
    res.status(200).json(courses)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

getInstPub = async(req, res) => {
  if(await Instructor.findById(req.user._id)){
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: { $and: [{"instructorData.name": req.user.name }, {published: true}] },
      },
    ]);
    res.status(200).json(courses)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

//get instructor courses
const getInstCourses = async (req, res) => {
if(await Instructor.findById(req.user._id)){
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $match: { "instructorData.name": req.user.name},
    },
  ]);
  res.status(200).json(courses);}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

//get a single course
const getCourse = async (req, res) => {
  if(await Instructor.findById(req.user._id)){
    const course = await Course.findOne({_id: req.query.id})
    res.status(200).json(course)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

//delete a course
const deleteCourse = async (req, res) => {
  if(await Instructor.findById(req.user._id)){
  const id = req.query.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Course" });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(400).json({ error: "No such Course" });
  }}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
  
};

//Rate a course
const rateCourse = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){ 
  const id = req.query.id;
  const Rating = req.query.rating;
  const user = req.user._id
  const course = await Course.findById({ _id: id });
  let ratingsTemp = [Object];
  ratingsTemp = course.ratings;
  let found = false;
  ratingsTemp.forEach(Function);

  function Function(value) {
    if (value.userId == user) {
      found = true;
    }
  }
  if (!found) {
    console.log(ratingsTemp);
    ratingsTemp.push({ rating: Rating, userId: user });
    console.log(ratingsTemp);
    let len = ratingsTemp.length;
    console.log(len);
    let ratingsSum = 0;
    ratingsTemp.forEach(myFunction);

    function myFunction(value) {
      ratingsSum += value.rating;
    }
    console.log(ratingsSum);

    const overallR = ratingsSum / len;
    console.log(overallR);

    const updatedcourse = await Course.findOneAndUpdate(
      { _id: id },
      { ratings: ratingsTemp, overallRating: overallR },
      { new: true }
    );
    res.status(200).json(updatedcourse);
  } else {
    return res
      .status(404)
      .json({ error: "you have already rated this course" });
  }}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }

};

//Review course
//update a course
const updateCourse = async (req, res) => {
  if(await Instructor.findById(req.user._id)){
    const id = req.query.id;

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  res.status(200).json(course)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
 
};
//add course exercise
const addCourseExercise = async (req, res) => {
  if(await Instructor.findById(req.user._id)){  const id = req.query.id; //637a197cbc66688b3924a864
  const { question, option1, option2, option3, option4, answer } = req.body;
  const courseEx = (await Course.findById({ _id: id }).select("exercises"))
    .exercises;
  const index = courseEx.length;
  exercise = {
    question: question,
    options: [option1, option2, option3, option4],
    answer: answer,
    index: index
  };
  courseEx.push(exercise);
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    { exercises: courseEx }
  );
  res.status(200).json(course);}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }

};

//create new course
const createCourse = async (req, res) => {
  if(await Instructor.findById(req.user._id)){ let {
    title,
    subject,
    price,
    discount,
    discountValidUntil,
    summary,
    previewURL,
  } = req.body;

  const videoId = getId(previewURL);
  const embeddedLink = "//www.youtube.com/embed/" + videoId;
  let discountApp = false;

  try {
    let currentDate = new Date().toJSON().slice(0, 10);
    if (discountValidUntil != null && discountValidUntil >= currentDate) {
      discountApp = true;
    } else {
      discount = 0;
      discountValidUntil = currentDate
    }
    const course = await Course.create({
      title,
      subject,
      price,
      discount,
      discountValidUntil,
      instructor: req.user._id,
      summary,
      previewURL: embeddedLink,
      overallRating: "0",
      discountApplied: discountApp,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

//filter based on subject and/or rating and/or price
const filterSubRatePrice = async (req, res) => {
  const subjects = [];
  const ratings = [];
  const prices = [];
  let subCount = 0;
  let priceCount = 0;
  let rateCount = 0;
  if (req.query.computer == "true") {
    subjects[0] = "Computer Science";
    subCount++;
  } else {
    subjects[0] = "";
  }
  if (req.query.digital == "true") {
    subjects[1] = "Digital Media";
    subCount++;
  } else {
    subjects[1] = "";
  }
  if (req.query.lab == "true") {
    subjects[2] = "Lab Programming";
    subCount++;
  } else {
    subjects[2] = "";
  }
  if (req.query.zero == "true") {
    ratings[0] = [0, 3];
    rateCount++;
  } else {
    ratings[0] = [];
  }
  if (req.query.four == "true") {
    ratings[1] = [4, 7];
    rateCount++;
  } else {
    ratings[1] = [];
  }
  if (req.query.eight == "true") {
    ratings[2] = [8, 10];
    rateCount++;
  } else {
    ratings[2] = [];
  }
  if (req.query.free == "true") {
    prices[0] = [0, 0];
    priceCount++;
  } else {
    prices[0] = [];
  }
  if (req.query.sixth == "true") {
    prices[1] = [60, 70];
    priceCount++;
  } else {
    prices[1] = [];
  }
  if (req.query.seventh == "true") {
    prices[2] = [70, 80];
    priceCount++;
  } else {
    prices[2] = [];
  }
  if (req.query.eighth == "true") {
    prices[3] = [80, 90];
    priceCount++;
  } else {
    prices[3] = [];
  }
  if (req.query.ninth == "true") {
    prices[4] = [90, 100];
    priceCount++;
  } else {
    prices[4] = [];
  }
  if (req.query.tenth == "true") {
    prices[5] = [100, 1000000000];
    priceCount++;
  } else {
    prices[5] = [];
  }
  if (subCount > 0 && priceCount > 0 && rateCount > 0) {
    const result = [];
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          subject: { $in: [subjects[0], subjects[1], subjects[2]] },
          $or: [
            {
              price: { $gte: prices[0][0], $lte: prices[0][1] },
            },
            {
              price: { $gte: prices[1][0], $lt: prices[1][1] },
            },
            {
              price: { $gte: prices[2][0], $lt: prices[2][1] },
            },
            {
              price: { $gte: prices[3][0], $lt: prices[3][1] },
            },
            {
              price: { $gte: prices[4][0], $lt: prices[4][1] },
            },
            {
              price: { $gte: prices[5][0], $lt: prices[5][1] },
            },
          ],
          $and: [{published: true}, {open: true}]
        },
      },
    ]);
    let j = 0;
    for (i = 0; i < courses.length; i++) {
      if (
        (courses[i].overallRating >= ratings[0][0] &&
          courses[i].overallRating <= ratings[0][1]) ||
        (courses[i].overallRating >= ratings[1][0] &&
          courses[i].overallRating <= ratings[1][1]) ||
        (courses[i].overallRating >= ratings[2][0] &&
          courses[i].overallRating <= ratings[2][1])
      ) {
        result[j] = courses[i];
        j++;
      }
    }
    res.status(200).json(result);
  } else if (subCount == 0 && priceCount > 0 && rateCount > 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          $or: [
            {
              overallRating: { $gte: ratings[0][0], $lte: ratings[0][1] },
            },
            {
              overallRating: { $gte: ratings[1][0], $lte: ratings[1][1] },
            },
            {
              overallRating: { $gte: ratings[2][0], $lte: ratings[2][1] },
            },
          ],
          $or: [
            {
              price: { $gte: prices[0][0], $lte: prices[0][1] },
            },
            {
              price: { $gte: prices[1][0], $lt: prices[1][1] },
            },
            {
              price: { $gte: prices[2][0], $lt: prices[2][1] },
            },
            {
              price: { $gte: prices[3][0], $lt: prices[3][1] },
            },
            {
              price: { $gte: prices[4][0], $lt: prices[4][1] },
            },
            {
              price: { $gte: prices[5][0], $lt: prices[5][1] },
            },
          ],
          $and: [{published: true}, {open: true}]
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount > 0 && rateCount == 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          subject: { $in: [subjects[0], subjects[1], subjects[2]] },
          $or: [
            {
              price: { $gte: prices[0][0], $lte: prices[0][1] },
            },
            {
              price: { $gte: prices[1][0], $lt: prices[1][1] },
            },
            {
              price: { $gte: prices[2][0], $lt: prices[2][1] },
            },
            {
              price: { $gte: prices[3][0], $lt: prices[3][1] },
            },
            {
              price: { $gte: prices[4][0], $lt: prices[4][1] },
            },
            {
              price: { $gte: prices[5][0], $lt: prices[5][1] },
            },
          ],
          $and: [{published: true}, {open: true}]
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0 && rateCount > 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          subject: { $in: [subjects[0], subjects[1], subjects[2]] },
          $or: [
            {
              overallRating: { $gte: ratings[0][0], $lte: ratings[0][1] },
            },
            {
              overallRating: { $gte: ratings[1][0], $lte: ratings[1][1] },
            },
            {
              overallRating: { $gte: ratings[2][0], $lte: ratings[2][1] },
            },
          ],
          $and: [{published: true}, {open: true}]
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0 && rateCount == 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: { subject: { $in: [subjects[0], subjects[1], subjects[2]] }, $and: [{published: true}, {open: true}] },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount > 0 && rateCount == 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          $or: [
            {
              price: { $gte: prices[0][0], $lte: prices[0][1] },
            },
            {
              price: { $gte: prices[1][0], $lt: prices[1][1] },
            },
            {
              price: { $gte: prices[2][0], $lt: prices[2][1] },
            },
            {
              price: { $gte: prices[3][0], $lt: prices[3][1] },
            },
            {
              price: { $gte: prices[4][0], $lt: prices[4][1] },
            },
            {
              price: { $gte: prices[5][0], $lt: prices[5][1] },
            },
          ],
          $and: [{published: true}, {open: true}]
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount == 0 && rateCount > 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          $or: [
            {
              overallRating: { $gte: ratings[0][0], $lte: ratings[0][1] },
            },
            {
              overallRating: { $gte: ratings[1][0], $lte: ratings[1][1] },
            },
            {
              overallRating: { $gte: ratings[2][0], $lte: ratings[2][1] },
            },
          ],
          $and: [{published: true}, {open: true}]
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount == 0 && rateCount == 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {$and: [{published: true}, {open: true}]}
      }
    ]);
    res.status(200).json(courses);
  }
};

const searchAllCourses = async (req, res) => {
  const THEsearchterm = req.query.searchTerm;
  var re = new RegExp(THEsearchterm, "i");
  //console.log(THEsearchterm)
  //const courses = await Course.find({instructor:{"$regex": re  }})
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $match: {
        $or: [
          { "instructorData.name": { $regex: re } },
          { title: { $regex: re } },
          { subject: { $regex: re } },
        ],
        $and: [{published: true}, {open: true}]
      },
    },
  ]);
  res.status(200).json(courses);
};

const searchInstrCourses = async (req, res) => {
  //console.log(req.user)
  if(await Instructor.findById(req.user._id)){
    const THEsearchterm = req.query.searchTerm;
  console.log(req.user.name)
  var re = new RegExp(THEsearchterm, "i");
  //console.log(THEsearchterm)
  //const courses = await Course.find({instructor:{"$regex": re  }})

  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $match: {
        "instructorData.name": req.user.name,
        $or: [{ title: { $regex: re } }, { subject: { $regex: re } }],
      },
    },
  ]);
  res.status(200).json(courses);
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

//filter based on price for INSTRUCTOR
const filterInstPriceSub = async (req, res) => {
  if(await Instructor.findById(req.user._id)){ const subjects = [];
  const prices = [];
  let subCount = 0;
  let priceCount = 0;
  if (req.query.computer == "true") {
    subjects[0] = "Computer Science";
    subCount++;
  } else {
    subjects[0] = "";
  }
  if (req.query.digital == "true") {
    subjects[1] = "Digital Media";
    subCount++;
  } else {
    subjects[1] = "";
  }
  if (req.query.lab == "true") {
    subjects[2] = "Lab Programming";
    subCount++;
  } else {
    subjects[2] = "";
  }
  if (req.query.free == "true") {
    prices[0] = [0, 0];
    priceCount++;
  } else {
    prices[0] = [];
  }
  if (req.query.sixth == "true") {
    prices[1] = [60, 70];
    priceCount++;
  } else {
    prices[1] = [];
  }
  if (req.query.seventh == "true") {
    prices[2] = [70, 80];
    priceCount++;
  } else {
    prices[2] = [];
  }
  if (req.query.eighth == "true") {
    prices[3] = [80, 90];
    priceCount++;
  } else {
    prices[3] = [];
  }
  if (req.query.ninth == "true") {
    prices[4] = [90, 100];
    priceCount++;
  } else {
    prices[4] = [];
  }
  if (req.query.tenth == "true") {
    prices[5] = [100, 1000000000];
    priceCount++;
  } else {
    prices[5] = [];
  }
  if (subCount > 0 && priceCount > 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          subject: { $in: [subjects[0], subjects[1], subjects[2]] },
          $or: [
            {
              price: { $gte: prices[0][0], $lte: prices[0][1] },
            },
            {
              price: { $gte: prices[1][0], $lt: prices[1][1] },
            },
            {
              price: { $gte: prices[2][0], $lt: prices[2][1] },
            },
            {
              price: { $gte: prices[3][0], $lt: prices[3][1] },
            },
            {
              price: { $gte: prices[4][0], $lt: prices[4][1] },
            },
            {
              price: { $gte: prices[5][0], $lt: prices[5][1] },
            },
          ],
          "instructorData.name": "Mariam Hossam",
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount > 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          $or: [
            {
              price: { $gte: prices[0][0], $lte: prices[0][1] },
            },
            {
              price: { $gte: prices[1][0], $lt: prices[1][1] },
            },
            {
              price: { $gte: prices[2][0], $lt: prices[2][1] },
            },
            {
              price: { $gte: prices[3][0], $lt: prices[3][1] },
            },
            {
              price: { $gte: prices[4][0], $lt: prices[4][1] },
            },
            {
              price: { $gte: prices[5][0], $lt: prices[5][1] },
            },
          ],
          "instructorData.name": "Mariam Hossam",
        },
      },
    ]);
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0) {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: {
          "instructorData.name": "Mariam Hossam",
          subject: { $in: [subjects[0], subjects[1], subjects[2]] },
        },
      },
    ]);
    res.status(200).json(courses);
  } else {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: { "instructorData.name": "Mariam Hossam" },
      },
    ]);
    res.status(200).json(courses);
  }}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};


const viewCorrectAnswer = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){const {
    course, //637a197cbc66688b3924a864
    exercise, //637a197cbc66688b3924a867
    answer,
  } = req.body;

  const exercises = (await Course.findById({ _id: course }).select("exercises"))
    .exercises;
  let reply = "";

  for (i = 0; i < exercises.length; i++) {
    if (exercises[i]._id == exercise) {
      if (exercises[i].answer == answer) {
        reply = "Your answer is correct";
      } else {
        reply = "The correct answer is: " + exercises[i].answer;
      }
    }
    break;
  }
  res.status(200).json(reply);}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

const addCourseSub = async (req, res) => {
  if(await Instructor.findById(req.user._id)){  const id = req.query.id;
  const {
    //courseID, //637a197cbc66688b3924a864
    title,
    videoLink,
    shortDescription,
    totalHours,
  } = req.body;
  const videoId = getId(videoLink);
  const embeddedLink = "//www.youtube.com/embed/" + videoId;
  const courseSubs = (await Course.findById({ _id: id }).select("subtitles")).subtitles;
  const oldCourse = await Course.findOne({ _id: id })
  const courseHours = parseInt(oldCourse.hours) + parseInt(totalHours)
  subtitle = {
    title: title,
    videoLink: embeddedLink,
    shortDescription: shortDescription,
    totalHours: totalHours,
  };
  courseSubs.push(subtitle);
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    { subtitles: courseSubs, hours: courseHours }
  );
  res.status(200).json(course);
}
else{
  res.status(400).json({ error: "Access Restriced" })
}

};
const addCoursePreview = async (req, res) => {
  if(await Instructor.findById(req.user._id)){  const id = req.query.id;
  const { videoPreviewURL } = req.body;
  const videoId = getId(videoPreviewURL);
  const embeddedLink = "//www.youtube.com/embed/" + videoId;
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    { previewURL: embeddedLink },
    { new: true }
  );
  res.status(200).json(course);}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

const addNotes = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    const id = req.query.id;
  console.log(id);
  const traineeID = req.user._id;
  const notes = await req.body.note;
  console.log(notes);

  const cTraineeNotes = (
    await Course.findById({ _id: id }).select("cTraineeNotes")
  ).cTraineeNotes;

  const iTraineeNotes = (
    await Course.findById({ _id: id }).select("iTraineeNotes")
  ).iTraineeNotes; //-----> getting the Arrays

  const trainee = await iTrainee.findById({ _id: traineeID });
  if (trainee != null) {
    note = {
      iTraineeID: traineeID,
      note: notes,
    };

    for (var i =0;i<iTraineeNotes.length;i++){
      if (iTraineeNotes[i].iTraineeID == traineeID){
        const removed = iTraineeNotes.splice(i,1); //splice returns the removed element not the list after the removal
        break;
      }
    }
    iTraineeNotes.push(note);

    const course = await Course.findByIdAndUpdate(
      { _id: id },
      { iTraineeNotes: iTraineeNotes },
      { new: true }
    );
    res.status(200).json(course);
  }

  const find = await cTrainee.findById({ _id: traineeID });
  if (find != null) {
    note = {
      cTraineeID: traineeID,
      note: notes,
    };

    for (var i =0;i<cTraineeNotes.length;i++){
      if (cTraineeNotes[i].cTraineeID == traineeID){
        const removed = cTraineeNotes.splice(i,1); //splice returns the removed element not the list after the removal
        break;
      }
    }
    cTraineeNotes.push(note);

    const course = await Course.findByIdAndUpdate(
      { _id: id },
      { cTraineeNotes: cTraineeNotes },
      { new: true }
    );
    res.status(200).json(course);
  }
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

const getMyNotes = async (req, res) => {
  const id = req.query.id;
  const traineeID = req.user._id;

  const cTraineeNotes = (
    await Course.findById({ _id: id }).select("cTraineeNotes")
  ).cTraineeNotes;

  const iTraineeNotes = (
    await Course.findById({ _id: id }).select("iTraineeNotes")
  ).iTraineeNotes; //-----> getting the Arrays

  let note = "";

  const trainee = await iTrainee.findById({ _id: traineeID });
  if (trainee != null) {
    for (var i =0;i<iTraineeNotes.length;i++){
      if (iTraineeNotes[i].iTraineeID == traineeID){
        note = iTraineeNotes[i].note;
        break;
      }
    }
    res.status(200).json({data: note});
  }

  const find = await cTrainee.findById({ _id: traineeID });
  if (find != null) {
    for (var i =0;i<cTraineeNotes.length;i++){
      if (cTraineeNotes[i].cTraineeID == traineeID){
        note = cTraineeNotes[i].note;
        break;
      }
    }
    res.status(200).json({data: note});
  }

};

const printNotePDF = async (req, res, next) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    const id = req.query.id;
  const traineeID = req.user._id;
  let notes = "";
  const iTraineeNotes = (await Course.findById({ _id: id }).select("iTraineeNotes")).iTraineeNotes;

  const cTraineeNotes = (await Course.findById({ _id: id }).select("cTraineeNotes")).cTraineeNotes;

  console.log(cTraineeNotes);

  const trainee = await iTrainee.findById({ _id: traineeID });
  if (trainee != null) {
    for (i = 0; i < iTraineeNotes.length; i++) {
      if (iTraineeNotes[i].iTraineeID == traineeID) {
        notes = notes.concat("\n").concat(iTraineeNotes[i].note);
      }
    }
  }

  const find = await cTrainee.findById({ _id: traineeID });
  if (find != null) {
    for (i = 0; i < cTraineeNotes.length; i++) {
      if (cTraineeNotes[i].cTraineeID == traineeID) {
        notes = notes.concat("\n").concat(cTraineeNotes[i].note);
      }
    }
  }

  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachement;filename=Notes.pdf",
  });

  buildNotePDF(
    (chunk) => stream.write(chunk),
    () => stream.end(),
    notes
  );
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

function buildNotePDF(dataCallback, endCallback, notes) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.fontSize(25).text(notes.toString());
  doc.end();
}

const printCertificatePDF = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachement;filename=Cetificate.pdf",
    });
  
    buildCertificatePDF(
      (chunk) => stream.write(chunk),
      () => stream.end()
    );
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

function buildCertificatePDF(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc
    .image("public/certificate.png", 55, 250, { fit: [500, 500] })
    //.rect(200, 30, 250, 250)
    .stroke();
  // .text("Fit", 320, 0);
  doc.end();
}

const openMyCourse = async (req, res) => {
  if(await Instructor.findById(req.user._id) || await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id) )
  {  const id = req.query.id;
  const newId = mongoose.Types.ObjectId(id);
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $match: { _id: newId },
    },
  ]);
  res.status(200).json(courses[0]);}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }

};

const moneyOwed = async (req, res) => {
  if(await Instructor.findById(req.user._id)){
  const courses = await Course.find({instructor: req.user._id});
  let money = 0;

  for(let i = 0; i < courses.length; i++){
    if(courses[i].discountApplied == true){
      money += (Math.round((courses[i].price * (100-courses[i].discount)/100) * 0.80)) * courses[i].numOfEnrolledTrainees //assuming website takes 20%
    }
    else{
      money += (Math.round(courses[i].price * 0.80)) * courses[i].numOfEnrolledTrainees
    }
  }

  const instructor = await Instructor.findOneAndUpdate({_id: req.user._id}, {wallet: money})

  res.status(200).json(instructor);
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}


const sendCertificateMail = async (req, res) => {
  // const id = req.query.id;
  traineeEmail = req.user.email;
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nourhan.khedr24@gmail.com",
      pass: "wtcynstutwftvzyz",
    },
  });
  let details = {
    from: "nourhan.khedr24@gmail.com",
    to: traineeEmail,
    subject: "CanCham Course Certificate",

    html: "<h2>Congratulations! You have successfully completed a course on CanCham's Online Learning Platform.</h2>",
    text: "Kindly find your certificate attached.",

    attachments: [
      {
        filename: "certificate.pdf",
        path: "public/certificate.pdf",
      },
    ],
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log("error");
      console.log(req.body.email);
    } else {
      console.log("email sent");
    }
  });
};

  //res.status(200).json(Course);
const getPopularCourses = async (req, res) => {
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $sort: { numOfEnrolledTrainees : -1},
    },
  ]);

  res.status(200).json(courses);
};

const getCourseLength = async (req, res) => {
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $sort: { hours : -1},
    },
  ]);

  res.status(200).json(courses);
}

const adminAddDiscount = async (req, res) => {
  if(await Admin.findById(req.user._id)){const id = req.query.id;
  let {
    courseDiscount,
    courseDiscountValidUntil,
  } = req.body;
  try {
    let currentDate = new Date().toJSON().slice(0, 10);

    if (courseDiscount !=null && (courseDiscount != 0) && courseDiscountValidUntil != null && courseDiscountValidUntil >= currentDate) {
      const course = await Course.findByIdAndUpdate(
        { _id: id },
        { discount: courseDiscount, discountValidUntil:courseDiscountValidUntil ,discountApplied: true },
        { new: true }
      );
      res.status(200).json(course);

    } else {
      res.status(400).json({ error: "Please enter a discount between 1-100 and a valid future expiry date." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
  
};

const reviewCourse = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person
  
      const id = req.query.id;
      const reviewContent = req.body.content;
      let theTrainee;
        theTrainee = await cTrainee.findOne({ _id: traineeId });
        if (theTrainee ==null){
          theTrainee = await iTrainee.findOne({ _id: traineeId });
        }
        if (theTrainee ==null){
          res.status(400).json({ error: "Invalid Trainee Id" });
        }
      const traineeName = theTrainee.firstname +" "+theTrainee.lastname;
      review = 
      {
        content: reviewContent,
        traineeId: traineeId,
        traineeName: traineeName
      }
  
      const courseReviews = (await Course.findById({ _id: id }).select("reviews")).reviews;
  
      for (var i =0;i<courseReviews.length;i++){
        if (courseReviews[i].traineeId == traineeId){
          res.status(400).json({ error: "You already reviewed that course!" });
          return;
        }
      }
  
      
      courseReviews.push(review);
      const course = await Course.findByIdAndUpdate(
        { _id: id },
        { reviews: courseReviews },
        { new: true }
      );
      res.status(200).json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
  }
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

const editMyCourseReview = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person
  
      const id = req.query.id;
      const reviewContent = req.body.content;
  
      const courseReviews = (await Course.findById({ _id: id }).select("reviews")).reviews;
  
      for (var i =0;i<courseReviews.length;i++){
        if (courseReviews[i].traineeId == traineeId){
          courseReviews[i].content=reviewContent;
        }
      }
      const course = await Course.findByIdAndUpdate(
        { _id: id },
        { reviews: courseReviews },
        { new: true }
      );
      res.status(200).json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
  }
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

const deleteMyCourseReview = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person
      const id = req.query.id;
  
      var courseReviews = (await Course.findById({ _id: id }).select("reviews")).reviews;
  
  
      for (var i =0;i<courseReviews.length;i++){
        if (courseReviews[i].traineeId == traineeId){
          const removed = courseReviews.splice(i,1); //splice returns the removed element not the list after the removal
          break;
        }
      }
  
      const course = await Course.findByIdAndUpdate(
        { _id: id },
        { reviews: courseReviews },
        { new: true }
      );
      res.status(200).json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
  }
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};

const getMyCourseReview = async (req, res) => {
  if(await iTrainee.findById(req.user._id) || await cTrainee.findById(req.user._id)){
    try {
      const traineeId = req.user._id;
      const id = req.query.id;
  
      var courseReviews = (await Course.findById({ _id: id }).select("reviews")).reviews;
      let myReview = "";
  
      for (var i =0;i<courseReviews.length;i++){
        if (courseReviews[i].traineeId == traineeId){
          myReview = courseReviews[i].content;
          break;
        }
      }
      response = {
          text: myReview
      } //either the content of the review or an empty string
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
    }}
const publishCourse = async(req, res) => {
  if(await Instructor.findById(req.user._id)){
    const course = await Course.findOneAndUpdate({_id: req.query.id}, {published: true, open: true})
    res.status(200).json(course)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
};


const addToProgress = async (req, res) => {
  const courseId = req.query.courseId;
  const component = req.query.component;
  
  const loggedInTraineeID = req.user._id;
  let traineesProgress = (await Course.findById({ _id: courseId }).select("traineesProgress")).traineesProgress;

  let found = false;

  for (var i =0;i<traineesProgress.length;i++){
    if ( traineesProgress[i].traineeId == (loggedInTraineeID) && traineesProgress[i].content==component ){
      found = true;
      break;
    }
  }
  if (found){
    let course =await Course.findById({ _id: courseId });
    res.status(200).json(course);
  }
  else{
    progress =
    {
      traineeId: loggedInTraineeID,
      content: component
    };
  
    traineesProgress.push(progress);
  
        const course = await Course.findByIdAndUpdate(
          { _id: courseId },
          { traineesProgress: traineesProgress },
          { new: true }
        );
        res.status(200).json(course);
  }
};


const getMyProgress = async (req, res) => {
  const courseId = req.query.courseId;

  let myProgress = 0;
  
  let subtitles = (await Course.findById({ _id: courseId }).select("subtitles")).subtitles;
  const totalItems = (subtitles.length + 1);

  let traineesProgress = (await Course.findById({ _id: courseId }).select("traineesProgress")).traineesProgress;

  for (var i =0;i<traineesProgress.length;i++){
    if ( traineesProgress[i].traineeId == req.user._id){
      myProgress++;
    }
  }
  res.status(200).json({data:(myProgress/totalItems) * 100} );
};


const closeCourse = async(req, res) => {
  if(await Instructor.findById(req.user._id)){
    const course = await Course.findOneAndUpdate({_id: req.query.id}, {open: false})
    res.status(200).json(course)
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

const getCourseInfo = async(req, res) => {
  if(await Instructor.findById(req.user._id)){
    const instructorID = mongoose.Types.ObjectId(req.user._id)
    const courseID = mongoose.Types.ObjectId(req.query.id);
    const course = await Course.aggregate([
      {
        $lookup: {
          from: "instructors",
          localField: "instructor",
          foreignField: "_id",
          as: "instructorData",
        },
      },
      {
        $unwind: "$instructorData",
      },
      {
        $match: { _id: courseID},
      },
    ]);

    if((course[0].instructor).toString() == (instructorID).toString()){
      course[0].mine = true
    }
    else{
      course[0].mine = false
    }
    //console.log(course)
    res.status(200).json(course[0])
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

module.exports = {
  getAllCourses,
  getCourse,
  deleteCourse,
  rateCourse,
  createCourse,
  searchAllCourses,
  filterSubRatePrice,
  getInstCourses,
  filterInstPriceSub,
  searchInstrCourses,
  viewCorrectAnswer,
  updateCourse,
  addCourseExercise,
  addCourseSub,
  addCoursePreview,
  openMyCourse,
  moneyOwed,
  addNotes,
  getMyNotes,
  printNotePDF,
  printCertificatePDF,
  sendCertificateMail,
  getPopularCourses,
  adminAddDiscount,
  reviewCourse,
  editMyCourseReview,
  deleteMyCourseReview,
  addToProgress,
  getMyProgress,
  getMyCourseReview,
  getCourseLength,
  getInstPub,
  getInstUnpub,
  publishCourse,
  closeCourse,
  getCourseInfo
};
