const Instructor = require("../models/instructorModel");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
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
  const instructor = await Instructor.findById({ _id: "63715373d953904400b6a4d5" });

  //if (!instructor) {
  // return res.status(404).json({error: 'No such instructor'})
  //}

  res.status(200).json(instructor);
};

//GET all individual Instructors
const getAllInstructor = (req, res) => {
  res.json({ mssg: "GET all individual Instructor" });
};

module.exports = {
  createInstructor,
  getAllInstructor,
  getInstructor,
  deleteInstructor,
  rateInstructor,
  updateInstructor,
  resetPassword,
};
