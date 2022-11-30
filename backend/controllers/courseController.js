//import the model
const Course = require("../models/courseModel");
const mongoose = require("mongoose");

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
  ]);
  res.status(200).json(courses);
};

//get instructor courses
const getInstCourses = async (req, res) => {
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
};

//get a single course
const getCourse = (req, res) => {
  res.json({ mssg: "GET a single course" });
};

//delete a course
const deleteCourse = async (req, res) => {
  const id = req.query.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Course" });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(400).json({ error: "No such Course" });
  }

};

//Rate a course
const rateCourse = async (req, res) => {
  const id = req.query.id;
  const { s1, s2, s3, s4, s5 } = req.body;
  let sum = 0;
  const course = await Course.findOneAndUpdate({ _id: id });
  if (s1 == "true") {
    sum++;
  }
  if (s2 == "true") {
    sum++;
  }
  if (s3 == "true") {
    sum++;
  }
  if (s4 == "true") {
    sum++;
  }
  if (s5 == "true") {
    sum++;
  }
  let ratingsTemp = [Number];
  ratingsTemp = course.ratings;
  console.log(ratingsTemp);
  ratingsTemp.push(sum);
  console.log(ratingsTemp);
  let len = ratingsTemp.length;
  console.log(len);
  let ratingsSum = 0;
  ratingsTemp.forEach(myFunction);

  function myFunction(value) {
    ratingsSum += value;
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
};
//update a course
const updateCourse = async (req, res) => {
  const id = req.query.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Course" });
  }

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!course) {
    return res.status(400).json({ error: "No such Course" });
  }
};
//add course exercise
const addCourseExercise = async (req, res) => {
  const id = req.query.id; //637a197cbc66688b3924a864
  const {
    question,
    option1,
    option2,
    option3,
    option4,
    answer,
  } = req.body;
  const courseEx = (
    await Course.findById({ _id: id }).select("exercises")
  ).exercises;
  exercise = {
    question: question,
    options: [option1, option2, option3, option4],
    answer: answer,
  };
  courseEx.push(exercise);
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    { exercises: courseEx }
  );
  res.status(200).json(course);
};


//create new course
const createCourse = async (req, res) => {
  let {
    title,
    hours,
    subject,
    price,
    discount,
    discountValidUntil,
    summary,
    previewURL,
  } = req.body;

  const videoId = getId(previewURL);
  const embeddedLink = "//www.youtube.com/embed/" + videoId;
  let discountApp = false

  try {
    let currentDate = new Date().toJSON().slice(0, 10);
    if(discountValidUntil != null && discountValidUntil >= currentDate){
      discountApp = true
    }
    else{
      discount = 0
    }
    const course = await Course.create({
      title,
      hours,
      subject,
      price,
      discount,
      discountValidUntil,
      instructor: "63715373d953904400b6a4d5",
      summary,
      previewURL: embeddedLink,
      overallRating: "0",
      discountApplied: discountApp
    });
    //Course.create() is async that's why we put async around the handler fn, so u can use await right here
    //now we're storing the response of Course.create() (which is the doc created along with its is) in course
    //inside create, u pass thru an object representing the doc u wanna create

    //status 200 to say everything is okay, and send back an obj which is the course created
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
        $match: { subject: { $in: [subjects[0], subjects[1], subjects[2]] } },
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
      },
    },
  ]);
  res.status(200).json(courses);
};

const searchInstrCourses = async (req, res) => {
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
        "instructorData.name": "Mariam Hossam",
        $or: [{ title: { $regex: re } }, { subject: { $regex: re } }],
      },
    },
  ]);
  res.status(200).json(courses);
};

//filter based on price for INSTRUCTOR
const filterInstPriceSub = async (req, res) => {
  const subjects = [];
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
  }
};

const viewCorrectAnswer = async (req, res) => {
  const {
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
  res.status(200).json(reply);
};

const addCourseSub = async (req, res) => {
  const id = req.query.id;
  const {
    //courseID, //637a197cbc66688b3924a864
    title,
    videoLink,
    shortDescription,
    totalHours,
  } = req.body;
  const videoId = getId(videoLink);
  const embeddedLink = "//www.youtube.com/embed/" + videoId;
  const courseSubs = (await Course.findById({ _id: id }).select("subtitles"))
    .subtitles;
  subtitle = {
    title: title,
    videoLink: embeddedLink,
    shortDescription: shortDescription,
    totalHours: totalHours,
  };
  courseSubs.push(subtitle);
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    { subtitles: courseSubs },
    { new: true }
  );
  res.status(200).json(course);
};


const addCoursePreview = async (req, res) => {
  const id = req.query.id;
  const { videoPreviewURL } = req.body;
  const videoId = getId(videoPreviewURL);
  const embeddedLink = "//www.youtube.com/embed/" + videoId;
  const course = await Course.findByIdAndUpdate(
    { _id: id },
    { previewURL: embeddedLink },
    { new: true }
  );
  res.status(200).json(course);
};


/*
const openMyCourse = async (req, res) => {
  const id = req.query.id;
  const course = await Course.findById({ _id: id });
  res.status(200).json(course);
};
*/

const openMyCourse = async (req, res) => {
  const id = req.query.id;
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
      $match: {_id: newId },
    },
  ]);
  res.status(200).json(courses[0]);
};


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
};
