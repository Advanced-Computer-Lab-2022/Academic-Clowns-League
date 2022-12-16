const iTrainee = require("../models/iTraineeModel");
const mongoose = require("mongoose");
// create new iTrainee
const Course = require("../models/courseModel");

// create new iTrainee ->  signing up of guest to become iTrainee

const createITrainee = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    password,
    country,
    email,
    gender,
    courses,
  } = req.body;
  try {
    const itrainee = await iTrainee.create({
      firstname,
      lastname,
      username,
      password,
      country,
      email,
      gender,
      courses,
    });
    res.status(200).json(itrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE an individual trainee
const updateITrainee = async (req, res) => {
  const id = req.query.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Individual Trainee" });
  }

  const itrainee = await iTrainee.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!itrainee) {
    return res.status(400).json({ error: "No such Individual Trainee" });
  }

  res.status(200).json(itrainee);
};

//DELETE an individual trainee
const deleteITrainee = (req, res) => {
  res.json({ mssg: "DELETE an individual trainee" });
};

//GET a single individual trainee
const getITrainee = (req, res) => {
  res.json({ mssg: "GET a single individual trainee" });
};

//GET all individual trainees
const getAllITrainee = (req, res) => {
  res.json({ mssg: "GET all individual trainees" });
};

const getRegisteredCourses = async (req, res) => {
  //get course id's from courses array of ctrainee
  const itraineeCourses = (
    await iTrainee
      .findById({ _id: req.user._id })
      .select("courses")
  ).courses;
  let courses = [];
  for (i = 0; i < itraineeCourses.length; i++) {
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
        $match: { _id : itraineeCourses[i] },
      },
    ])
    courses.push(course[0]);
  }
  res.status(200).json(courses);
};

//this trainee id doesn't have grades, make a trainee with grades
const getGrade = async (req, res) => {
  const itraineeGrades = (await iTrainee.findById({_id: '637a8c03f7740521fbe8246e'}).select('grades')).grades
  let grade = 0;
  for(i = 0; i < itraineeGrades.length; i++){
    if(itraineeGrades[i].courseID == "637a197cbc66688b3924a864"){
      for(j = 0; j < itraineeGrades[i].exercises.length; j++){
        if(itraineeGrades[i].exercises[j].exerciseID == "637a197cbc66688b3924a868"){
          grade = itraineeGrades[i].exercises[j].grade
          break
        }
      }
      break
    }
  }
  res.status(200).json(grade)
}

module.exports = {
  createITrainee,
  getAllITrainee,
  getITrainee,
  deleteITrainee,
  updateITrainee,
  getRegisteredCourses,
  getGrade
};
