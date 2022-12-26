const Instructor = require("../models/instructorModel");
const Course = require("../models/courseModel");
const iTrainee = require("../models/iTraineeModel");
const cTrainee = require("../models/cTraineeModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const User = require("../models/userModel");
const Admin = require("../models/adminModel");

const createInstructor = async (req, res) => {
  if (await Admin.findById(req.user._id)) {
    const { username, password, country, email, miniBio, name } = req.body;
    const takenUsername = await User.findOne({ username: username });
    if (takenUsername) {
      res.json({ message: "Username is taken" });
    } else {
      try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const instructor = await Instructor.create({
          username,
          password: encryptedPassword,
          country,
          email,
          miniBio,
          name,
        });
        const dbUser = new User({
          username: username,
          password: encryptedPassword,
          role: "Instructor",
        });
        dbUser.save();
        res.status(200).json(instructor);
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

//RATE an individual Instructor
const rateInstructor = async (req, res) => {
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    const id = req.query.id;
    const Rating = req.query.rating;
    const user = req.query.user;
    const instructor = await Instructor.findById({ _id: id });
    let ratingsTemp = [Object];
    ratingsTemp = instructor.ratings;
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

      const updatedinstructor = await Instructor.findOneAndUpdate(
        { _id: id },
        { ratings: ratingsTemp, rating: overallR },
        { new: true }
      );
      res.status(200).json(updatedinstructor);
    } else {
      return res
        .status(404)
        .json({ error: "you have already rated this instructor" });
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};
//UPDATE an individual Instructor

const updateInstructor = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    const id = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Instructor" });
    }

    const instructor = await Instructor.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!instructor) {
      return res.status(400).json({ error: "No such Instructor" });
    }

    res.status(200).json(instructor);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const updatePassword = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    console.log("HI");
    const id = req.user._id;
    console.log(id);
    console.log(req.body.password);
    console.log(req.body.newPassword);
    console.log(req.body.confirmPassword);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Instructor" });
    }

    //const instructor = await Instructor.findOne({ _id: id });
    const encryptedPassword = await bcrypt.hash(req.body.newPassword, 10);
    if (req.body.newPassword == req.body.confirmPassword) {
      if (bcrypt.compareSync(req.body.password, req.user.password)) {
        console.log("im here");
        const instructor = await Instructor.findOneAndUpdate(
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
        res.status(200).json(instructor);
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

//DELETE an individual Instructor
const deleteInstructor = (req, res) => {
  res.json({ mssg: "DELETE an individual Instructor" });
};

//GET a single individual Instructor
const getInstructor = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    // const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    // return res.status(404).json({error: 'No such instructor'})
    // }

    // const instructor = await Instructor.findById(id)
    const instructor = await Instructor.findById({ _id: req.user._id });

    //if (!instructor) {
    // return res.status(404).json({error: 'No such instructor'})
    //}

    res.status(200).json(instructor);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

//GET all individual Instructors
const getAllInstructor = (req, res) => {
  res.json({ mssg: "GET all individual Instructor" });
};

const reviewInstructor = async (req, res) => {
  //get the course id as query, and review the instructor of that course
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person
      const reviewContent = req.body.content;

      const courseId = req.query.id;
      const theCourse = await Course.findOne({ _id: courseId });
      const instructorId = theCourse.instructor;

      let theTrainee;
      theTrainee = await cTrainee.findOne({ _id: traineeId });
      if (theTrainee == null) {
        theTrainee = await iTrainee.findOne({ _id: traineeId });
      }
      if (theTrainee == null) {
        res.status(400).json({ error: "Invalid Trainee Id" });
      }
      const traineeName = theTrainee.firstname + " " + theTrainee.lastname;

      review = {
        content: reviewContent,
        traineeId: traineeId,
        traineeName: traineeName,
      };

      const instructorReviews = (
        await Instructor.findById({ _id: instructorId }).select("reviews")
      ).reviews;

      for (var i = 0; i < instructorReviews.length; i++) {
        if (instructorReviews[i].traineeId == traineeId) {
          res
            .status(400)
            .json({ error: "You already reviewed that instructor!" });
          return;
        }
      }
      instructorReviews.push(review);
      const instructor = await Instructor.findByIdAndUpdate(
        { _id: instructorId },
        { reviews: instructorReviews },
        { new: true }
      );
      res.status(200).json(instructor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const editMyInstructorReview = async (req, res) => {
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person
      const reviewContent = req.body.content;

      const courseId = req.query.id;
      const theCourse = await Course.findOne({ _id: courseId });
      const instructorId = theCourse.instructor;

      const instructorReviews = (
        await Instructor.findById({ _id: instructorId }).select("reviews")
      ).reviews;

      for (var i = 0; i < instructorReviews.length; i++) {
        if (instructorReviews[i].traineeId == traineeId) {
          instructorReviews[i].content = reviewContent;
        }
      }
      const instructor = await Instructor.findByIdAndUpdate(
        { _id: instructorId },
        { reviews: instructorReviews },
        { new: true }
      );
      res.status(200).json(instructor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

const deleteMyInstructorReview = async (req, res) => {
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person

      const courseId = req.query.id;
      const theCourse = await Course.findOne({ _id: courseId });
      const instructorId = theCourse.instructor;

      var instructorReviews = (
        await Instructor.findById({ _id: instructorId }).select("reviews")
      ).reviews;

      for (var i = 0; i < instructorReviews.length; i++) {
        if (instructorReviews[i].traineeId == traineeId) {
          const removed = instructorReviews.splice(i, 1); //splice returns the removed element not the list after the removal
          break;
        }
      }

      const instructor = await Instructor.findByIdAndUpdate(
        { _id: instructorId },
        { reviews: instructorReviews },
        { new: true }
      );
      res.status(200).json(instructor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

module.exports = {
  createInstructor,
  getAllInstructor,
  getInstructor,
  deleteInstructor,
  rateInstructor,
  updateInstructor,
  reviewInstructor,
  editMyInstructorReview,
  deleteMyInstructorReview,
  updatePassword,
};
