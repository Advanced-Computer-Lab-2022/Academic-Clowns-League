const cTrainee = require("../models/cTraineeModel");
const mongoose = require("mongoose");
//POST a corporate trainee
const Course = require("../models/courseModel");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const nodemailer = require("nodemailer");

//POST a corporate trainee
const createCTrainee = async (req, res) => {
  if (await Admin.findById(req.user._id)) {
    const {
      firstname,
      lastname,
      username,
      password,
      email,
      country,
      courses,
      grades,
    } = req.body;

    const takenUsername = await User.findOne({ username: username });
    if (takenUsername) {
      res.json({ message: "Username is taken" });
    } else {
      try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const ctrainee = await cTrainee.create({
          firstname,
          lastname,
          username,
          password: encryptedPassword,
          email,
          country,
          courses,
          grades,
        });
        const dbUser = new User({
          username: username,
          password: encryptedPassword,
          email: email,
          role: "cTrainee",
        });
        dbUser.save();
        res.status(200).json(ctrainee);
      } catch (error) {
        res
          .status(400)
          .json({ message: "Signup Failed", error: error.message });
      }
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

//UPDATE a corporate trainee
const updateCTrainee = async (req, res) => {
  if (await Admin.findById(req.user._id)) {
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
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
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
  if (await cTrainee.findById(req.user._id)) {
    const ctraineeCourses = (
      await cTrainee.findById({ _id: req.user._id }).select("courses")
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
          $match: { _id: ctraineeCourses[i] },
        },
      ]);
      courses.push(course[0]);
    }
    res.status(200).json(courses);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const getGrade = async (req, res) => {
  const {
    //ctrainee, 637a8c03f7740521fbe8246e
    course, //637a197cbc66688b3924a864
    exercise, //637a197cbc66688b3924a868
  } = req.body;
  const ctraineeGrades = (
    await cTrainee.findById({ _id: req.user._id }).select("grades")
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

const cTraineeUpdatePassword = async (req, res) => {
  if (await cTrainee.findById(req.user._id)) {
    console.log("HI");
    const id = req.user._id;
    console.log(id);
    console.log(req.body.password);
    console.log(req.body.newPassword);
    console.log(req.body.confirmPassword);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Corporate Trainee" });
    }

    //const instructor = await Instructor.findOne({ _id: id });
    const encryptedPassword = await bcrypt.hash(req.body.newPassword, 10);
    if (req.body.newPassword == req.body.confirmPassword) {
      if (bcrypt.compareSync(req.body.password, req.user.password)) {
        console.log("im here");
        const ctrainee = await cTrainee.findOneAndUpdate(
          { _id: id },
          {
            password: encryptedPassword,
          }
        );

        await User.findOneAndUpdate(
          { username: req.user.username },
          {
            password: encryptedPassword,
          }
        );
        res.status(200).json(ctrainee);
      }
    } else {
      res.status(400).json({ error: "cant do it" });
    }

    //if (!instructor) {
    //return res.status(400).json({ error: "No such Instructor" });
    //}
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};
const getCTraineeInfo = async(req, res) => {
  if(await cTrainee.findById(req.user._id)){
  const ctrainee = await cTrainee.findOne({_id: req.user._id});
  const result  ={
    name: ctrainee.firstname +" "+ ctrainee.lastname,
    username: ctrainee.username,
    email: ctrainee.email,
  };
  res.status(200).json(result);
}
}
const getCourse = async(req, res) => {
  if(await cTrainee.findById(req.user._id)){
    const ctraineeID = req.user._id
    const ctraineeCourses = await cTrainee.findOne({_id: ctraineeID}).select("courses")
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

    let flag = false;

    for(let i = 0; i < ctraineeCourses.courses.length; i++){
      if(courseID == ctraineeCourses.courses[i].toString()){
        flag = true
        break;
      }
    }
    if(flag == true){
      course[0].register = true
    }
    else{
      course[0].register = false
    }

    res.status(200).json(course[0])
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}





module.exports = {
  createCTrainee,
  getAllCTrainee,
  getCTrainee,
  deleteCTrainee,
  updateCTrainee,
  getRegisteredCourses,
  getGrade,
  cTraineeUpdatePassword,
  getCTraineeInfo,
  getCourse
};
