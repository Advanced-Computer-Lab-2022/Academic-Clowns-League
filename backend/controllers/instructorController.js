const Instructor = require("../models/instructorModel");
const Course = require("../models/courseModel");
const iTrainee = require("../models/iTraineeModel");
const cTrainee = require("../models/cTraineeModel");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const User = require("../models/userModel");
// create new Instructor

/*const createInstructor = async (req, res) => {
  const { username, password, country, ratings, reviews, email, miniBio } =
    req.body;

  //add instructor to DB
  try {
    const instructor = await Instructor.create({
      username,
      password,
      country,
      ratings,
      reviews,
      email,
      miniBio,
    });
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};*/

const createInstructor = async (req, res) => {
  const { username, password, country, email, miniBio, name } = req.body;
  try {
    const instructor = await Instructor.create({
      username,
      password,
      country,
      email,
      miniBio,
      name,
    });
    const dbUser =  new User({
      username: username,
      password : password,
      role: "Instructor"
  });
  dbUser.save();
    //Instructor.create() is async that's why we put async around the handler fn, so u can use await right here
    //now we're storing the response of Instructor.create() (which is the doc created along with its is) in Instructor
    //inside create, u pass thru an object representing the doc u wanna create

    //status 200 to say everything is okay, and send back an obj which is the Instructor created
    res.status(200).json(instructor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//RATE an individual Instructor
const rateInstructor = async (req, res) => {
  const id = req.query.id;
  const Rating = req.query.rating;
  const user = req.query.user;
  const instructor = await Instructor.findById({ _id: id });
  let ratingsTemp = [Object];
  ratingsTemp = instructor.ratings;
  let found = false;
  ratingsTemp.forEach(Function);

  function Function(value) {
    if(value.userId==user){
      found=true;
    }
  }
  if(!found){
  console.log(ratingsTemp);
  ratingsTemp.push({rating:Rating, userId:user});
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
  }
  else{
    return res.status(404).json({error: 'you have already rated this instructor'})
  }
};
//UPDATE an individual Instructor
const resetPassword = async (req, res) => {
  const id = req.query.id;

  /* if (!mongoose.Types.ObjectId.isValid(id)) {
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
  }*/

  // const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such instructor" });
  }

  const instructor = await Instructor.findById(id);
  //const instructor = await Instructor.find({ _id: "63715373d953904400b6a4d5" });

  if (!instructor) {
    return res.status(404).json({ error: "No such instructor" });
  } else {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nourhan.khedr24@gmail.com",
        pass: "wtcynstutwftvzyz",
      },
    });
    let details = {
      from: "nourhan.khedr24@gmail.com",
      to: req.body.email,
      subject: "Reset password",
      text: " Reset Password Link",
    };

    mailTransporter.sendMail(details, (err) => {
      if (err) {
        console.log("error");
        console.log(req.body.email);
      } else {
        console.log("email sent");
      }
    });
  }

  res.status(200).json(instructor);
};

const updateInstructor = async (req, res) => {
  const id = req.query.id;

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
};

//DELETE an individual Instructor
const deleteInstructor = (req, res) => {
  res.json({ mssg: "DELETE an individual Instructor" });
};

//GET a single individual Instructor
const getInstructor = async (req, res) => {
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
};

//GET all individual Instructors
const getAllInstructor = (req, res) => {
  res.json({ mssg: "GET all individual Instructor" });
};


const reviewInstructor = async (req, res) => { //get the course id as query, and review the instructor of that course
  try {
    const traineeId = req.user._id; //replace by id of the loggedin person
    const reviewContent = req.body.content;

    const courseId = req.query.id;
    const theCourse = await Course.findOne({ _id: courseId });
    const instructorId = theCourse.instructor;
    
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

    const instructorReviews = (await Instructor.findById({ _id: instructorId }).select("reviews")).reviews;

    for (var i =0;i<instructorReviews.length;i++){
      if (instructorReviews[i].traineeId == traineeId){
        res.status(400).json({ error: "You already reviewed that instructor!" });
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
};

const editMyInstructorReview = async (req, res) => {
  try {
    const traineeId = req.user._id; //replace by id of the loggedin person
    const reviewContent = req.body.content;

    const courseId = req.query.id;
    const theCourse = await Course.findOne({ _id: courseId });
    const instructorId = theCourse.instructor;

    const instructorReviews = (await Instructor.findById({ _id: instructorId }).select("reviews")).reviews;

    for (var i =0;i<instructorReviews.length;i++){
      if (instructorReviews[i].traineeId == traineeId){
        instructorReviews[i].content=reviewContent;
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
};

const deleteMyInstructorReview = async (req, res) => {
  try {
    const traineeId = req.user._id; //replace by id of the loggedin person

    const courseId = req.query.id;
    const theCourse = await Course.findOne({ _id: courseId });
    const instructorId = theCourse.instructor;

    var instructorReviews = (await Instructor.findById({ _id: instructorId }).select("reviews")).reviews;

    for (var i =0;i<instructorReviews.length;i++){
      if (instructorReviews[i].traineeId == traineeId){
        const removed = instructorReviews.splice(i,1); //splice returns the removed element not the list after the removal
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
};

module.exports = {
  createInstructor,
  getAllInstructor,
  getInstructor,
  deleteInstructor,
  rateInstructor,
  updateInstructor,
  resetPassword,
  reviewInstructor,
  editMyInstructorReview,
  deleteMyInstructorReview
};
