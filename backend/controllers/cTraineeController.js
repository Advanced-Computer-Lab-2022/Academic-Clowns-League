const cTrainee = require("../models/cTraineeModel");
const mongoose = require("mongoose");
//POST a corporate trainee
const Course = require("../models/courseModel");
const { json } = require("body-parser");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");

//POST a corporate trainee
const createCTrainee = async (req, res) => {
  if(await Admin.findById(req.user._id)){const {
    firstname,
    lastname,
    username,
    password,
    email,
    country,
    courses,
    grades,
  } = req.body;

  // add ctrainee to DB
  try {
    const ctrainee = await cTrainee.create({
      firstname,
      lastname,
      username,
      password,
      email,
      country,
      courses,
      grades,
    });
    const dbUser =  new User({
      username: username,
      password : password,
      role: "cTrainee"
  });
  dbUser.save();
    res.status(200).json(ctrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}

  
};

//only need username, password and email on creation

/*const createCTrainee = async (req, res) => {
  const {
    firstName,
    lastName,
    username,
    password,
    email,
    country,
    credNumber,
    credCCV,
    credExpDate,
    courses,
  } = req.body;
  try {
    const ctrainee = await cTrainee.create({
      firstName,
      lastName,
      username,
      password,
      email,
      country,
      credNumber,
      credCCV,
      credExpDate,
      courses,
    });
    //Instructor.create() is async that's why we put async around the handler fn, so u can use await right here
    //now we're storing the response of Instructor.create() (which is the doc created along with its is) in Instructor
    //inside create, u pass thru an object representing the doc u wanna create

    //status 200 to say everything is okay, and send back an obj which is the Instructor created
    res.status(200).json(ctrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};*/

//UPDATE a corporate trainee
const updateCTrainee = async (req, res) => {
  const id = req.query.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Corporate Trainee" });
  }

  const ctrainee = await cTrainee.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!ctrainee) {
    return res.status(400).json({ error: "No such Corporate Tainee" });
  }

  res.status(200).json(ctrainee);
};

//DELETE a corporate trainee
const deleteCTrainee = (req, res) => {
  res.json({ mssg: "DELETE a corporate trainee" });
};

//GET a single corporate trainee
const getCTrainee = (req, res) => {
  res.json({ mssg: "GET a single corporate trainee" });
};

//GET all corporate trainees
const getAllCTrainee = (req, res) => {
  res.json({ mssg: "GET all corporate trainees" });
};


const getRegisteredCourses = async (req, res) => {
  //get course id's from courses array of ctrainee
  const ctraineeCourses = (
    await cTrainee
      .findById({ _id: req.user._id })
      .select("courses")
  ).courses;
  let courses = [];
  for (i = 0; i < ctraineeCourses.length; i++) {
    let course = await Course.aggregate([
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
        $match: { _id : ctraineeCourses[i] },
      }
    ])
    courses.push(course[0])
  }
  res.status(200).json(courses);
};

const getGrade = async (req, res) => {
  const {
    //ctrainee, 637a8c03f7740521fbe8246e
    course, //637a197cbc66688b3924a864
    exercise, //637a197cbc66688b3924a868
  } = req.body;
  const ctraineeGrades = (
    await cTrainee
      .findById({ _id: req.user._id })
      .select("grades")
  ).grades;
  let grade = 0;
  for (i = 0; i < ctraineeGrades.length; i++) {
    if (ctraineeGrades[i].courseID == course) {
      for (j = 0; j < ctraineeGrades[i].exercises.length; j++) {
        if (ctraineeGrades[i].exercises[j].exerciseID == exercise) {
          grade = ctraineeGrades[i].exercises[j].grade;
          break;
        }
      }
      break;
    }
  }
  res.status(200).json(grade);
};

module.exports = {
  createCTrainee,
  getAllCTrainee,
  getCTrainee,
  deleteCTrainee,
  updateCTrainee,
  getRegisteredCourses,
  getGrade,
};
