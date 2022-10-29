//import the model
const Course = require("../models/courseModel");

//get all courses
const getAllCourses = async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json(courses);
};

//get instructor courses
const getInstCourses = async (req, res) => {
  const courses = await Course.find({ instructor: "Mariam Hossam" });
  res.status(200).json(courses);
};

//get a single course
const getCourse = (req, res) => {
  res.json({ mssg: "GET a single course" });
};

//delete a course
const deleteCourse = (req, res) => {
  res.json({ mssg: "DELETE a course" });
};

//update a course
const updateCourse = (req, res) => {
  res.json({ mssg: "UPDATE a course" });
};

//create new course
const createCourse = async (req, res) => {
  const { title, hours } = req.body;
  try {
    const course = await Course.create({
      title,
      hours,
      subject,
      price,
      discount,
      discountValidUntil,
      instructor,
      summary,
      previewURL,
      reveiws,
      overallRating,
      ratings,
      outline,
      subtitles,
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
  console.log(req.query);
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
    prices[1] = [6000, 7000];
    priceCount++;
  } else {
    prices[1] = [];
  }
  if (req.query.seventh == "true") {
    prices[2] = [7000, 8000];
    priceCount++;
  } else {
    prices[2] = [];
  }
  if (req.query.eighth == "true") {
    prices[3] = [8000, 9000];
    priceCount++;
  } else {
    prices[3] = [];
  }
  if (req.query.ninth == "true") {
    prices[4] = [9000, 10000];
    priceCount++;
  } else {
    prices[4] = [];
  }
  if (req.query.tenth == "true") {
    prices[5] = [10000, 1000000000];
    priceCount++;
  } else {
    prices[5] = [];
  }
  if (subCount > 0 && priceCount > 0 && rateCount > 0) {
    const courses = await Course.find({
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
    });
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount > 0 && rateCount > 0) {
    const courses = await Course.find({
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
    });
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount > 0 && rateCount == 0) {
    const courses = await Course.find({
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
    });
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0 && rateCount > 0) {
    const courses = await Course.find({
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
    });
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0 && rateCount == 0) {
    const courses = await Course.find({
      subject: { $in: [subjects[0], subjects[1], subjects[2]] },
    });
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount > 0 && rateCount == 0) {
    const courses = await Course.find({
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
    });
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount == 0 && rateCount > 0) {
    const courses = await Course.find({
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
    });
    res.status(200).json(courses);
  } else {
    const courses = await Course.find({});
    res.status(200).json(courses);
  }
};

const searchAllCourses = async (req, res) => {
  const THEsearchterm = req.query.searchTerm;
  var re = new RegExp(THEsearchterm, "i");
  //console.log(THEsearchterm)
  //const courses = await Course.find({instructor:{"$regex": re  }})
  const courses = await Course.find({
    $or: [
      { instructor: { $regex: re } },
      { title: { $regex: re } },
      { subject: { $regex: re } },
    ],
  });
  res.status(200).json(courses);
};

//filter based on price for INSTRUCTOR
const filterInstPriceSub = async (req, res) => {
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
    prices[1] = [6000, 7000];
    priceCount++;
  } else {
    prices[1] = [];
  }
  if (req.query.seventh == "true") {
    prices[2] = [7000, 8000];
    priceCount++;
  } else {
    prices[2] = [];
  }
  if (req.query.eighth == "true") {
    prices[3] = [8000, 9000];
    priceCount++;
  } else {
    prices[3] = [];
  }
  if (req.query.ninth == "true") {
    prices[4] = [9000, 10000];
    priceCount++;
  } else {
    prices[4] = [];
  }
  if (req.query.tenth == "true") {
    prices[5] = [10000, 1000000000];
    priceCount++;
  } else {
    prices[5] = [];
  }
  if (subCount > 0 && priceCount > 0 && rateCount > 0) {
    const courses = await Course.find({
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
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount > 0 && rateCount > 0) {
    const courses = await Course.find({
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
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount > 0 && rateCount == 0) {
    const courses = await Course.find({
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
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0 && rateCount > 0) {
    const courses = await Course.find({
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
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else if (subCount > 0 && priceCount == 0 && rateCount == 0) {
    const courses = await Course.find({
      subject: { $in: [subjects[0], subjects[1], subjects[2]] },
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount > 0 && rateCount == 0) {
    const courses = await Course.find({
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
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else if (subCount == 0 && priceCount == 0 && rateCount > 0) {
    const courses = await Course.find({
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
      instructor: "Mariam Hossam",
    });
    res.status(200).json(courses);
  } else {
    const courses = await Course.find({ instructor: "Mariam Hossam" });
    res.status(200).json(courses);
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  deleteCourse,
  updateCourse,
  createCourse,
  searchAllCourses,
  filterSubRatePrice,
  getInstCourses,
  filterInstPriceSub,
};
