const cTrainee = require("../models/cTraineeModel");
const Course = require("../models/courseModel");
const { json } = require("body-parser");

//POST a corporate trainee
const createCTrainee = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    password,
    email,
    country,
    courses,
    grades
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
      grades
    });
    res.status(200).json(ctrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
const updateCTrainee = (req, res) => {
  res.json({ mssg: "UPDATE a corporate trainee" });
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

const getRegisteredCourses = async (req,res) => {
  //get course id's from courses array of ctrainee
  const ctraineeCourses = (await cTrainee.findById({_id: '637909641e794efbe229af85'}).select('courses')).courses
  let courses = []
  for(i = 0; i < ctraineeCourses.length; i++){
    courses.push(await Course.find({_id: ctraineeCourses[i]}))
  }
  res.status(200).json(courses);
}

const getGrade = async (req, res) => {
  const ctraineeGrades = (await cTrainee.findById({_id: '637a8c03f7740521fbe8246e'}).select('grades')).grades
  let grade = 0;
  for(i = 0; i < ctraineeGrades.length; i++){
    if(ctraineeGrades[i].courseID == "637a197cbc66688b3924a864"){
      for(j = 0; j < ctraineeGrades[i].exercises.length; j++){
        if(ctraineeGrades[i].exercises[j].exerciseID == "637a197cbc66688b3924a868"){
          grade = ctraineeGrades[i].exercises[j].grade
        }
      }
    }
  }
  res.status(200).json(grade)
}

module.exports = {
  createCTrainee,
  getAllCTrainee,
  //getCTrainee,
  deleteCTrainee,
  updateCTrainee,
  getRegisteredCourses,
  getGrade
};
