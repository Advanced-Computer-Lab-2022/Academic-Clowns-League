const iTrainee = require("../models/iTraineeModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// create new iTrainee
const Course = require("../models/courseModel");
const { json } = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51MEY6KIUMr1PgLAYVRrB9eX8QBJmBt69FVExk91mUKPVjKRoVs0ahpOom28rFevJoSxq9zrZrZUIsD4OorI0nu4E00SfpJVKqt"
);
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const Instructor = require("../models/instructorModel");
const nodemailer = require("nodemailer");

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
    const dbUser = new User({
      username: username,
      password: password,
      role: "iTrainee",
    });
    dbUser.save();

    res.status(200).json(itrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE an individual trainee
const updateITrainee = async (req, res) => {
  if (await iTrainee.findById(req.user._id)) {
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
  }
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
  if (await iTrainee.findById(req.user._id)) {
    const itraineeCourses = (
      await iTrainee.findById({ _id: req.user._id }).select("courses")
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
          $match: { _id: itraineeCourses[i] },
        },
      ]);
      courses.push(course[0]);
    }
    res.status(200).json(courses);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

//this trainee id doesn't have grades, make a trainee with grades
const getGrade = async (req, res) => {
  const itraineeGrades = (
    await iTrainee.findById({ _id: req.user._id }).select("grades")
  ).grades;
  let grade = 0;
  for (i = 0; i < itraineeGrades.length; i++) {
    if (itraineeGrades[i].courseID == "637a197cbc66688b3924a864") {
      for (j = 0; j < itraineeGrades[i].exercises.length; j++) {
        if (
          itraineeGrades[i].exercises[j].exerciseID ==
          "637a197cbc66688b3924a868"
        ) {
          grade = itraineeGrades[i].exercises[j].grade;
          break;
        }
      }
      break;
    }
  }
  res.status(200).json(grade);
};

const calculateOrderAmount = async (items) => {
  const course = await Course.findOne({ _id: items.id });

  if (course.discountApplied == true) {
    return Math.round((course.price * (100 - course.discount)) / 100);
  } else {
    return course.price;
  }
};

const payForCourse = async (req, res) => {
  if (await iTrainee.findById(req.user._id)) {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: (await calculateOrderAmount(items)) * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const registerForCourse = async (req, res) => {
  if (await iTrainee.findById(req.user._id)) {
    //console.log(req.query.id)
    const itraineeCourses = (
      await iTrainee.findById({ _id: req.user._id }).select("courses")
    ).courses;
    itraineeCourses.push(req.query.id);

    const response = await iTrainee.findOneAndUpdate(
      { _id: req.user._id },
      { courses: itraineeCourses }
    );
    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const applyRefund = async (req, res) => {
  if (await Admin.findById(req.user._id)) {
    const money = req.body.money;
    const itrainee = await iTrainee.findOne({ _id: req.user._id });

    const newWallet = parseInt(itrainee.wallet) + parseInt(money);

    const response = await iTrainee.findOneAndUpdate(
      { _id: req.user._id },
      { wallet: newWallet }
    );

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const iTraineeUpdatePassword = async (req, res) => {
  if (await iTrainee.findById(req.user._id)) {
    console.log("HI");
    const id = req.user._id;
    console.log(id);
    console.log(req.body.password);
    console.log(req.body.newPassword);
    console.log(req.body.confirmPassword);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Individual Trainee" });
    }

    //const instructor = await Instructor.findOne({ _id: id });
    const encryptedPassword = await bcrypt.hash(req.body.newPassword, 10);
    if (req.body.newPassword == req.body.confirmPassword) {
      if (bcrypt.compareSync(req.body.password, req.user.password)) {
        console.log("im here");
        const itrainee = await iTrainee.findOneAndUpdate(
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
        res.status(200).json(itrainee);
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

module.exports = {
  createITrainee,
  getAllITrainee,
  getITrainee,
  deleteITrainee,
  updateITrainee,
  getRegisteredCourses,
  getGrade,
  payForCourse,
  registerForCourse,
  applyRefund,
  iTraineeUpdatePassword,
};
