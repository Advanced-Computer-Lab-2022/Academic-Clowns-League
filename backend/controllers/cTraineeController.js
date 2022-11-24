const cTrainee = require("../models/cTraineeModel");
const mongoose = require("mongoose");
//POST a corporate trainee
const createCTrainee = async (req, res) => {
  const { firstname, lastname, username, password, email, country, courses } =
    req.body;

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
    });
    res.status(200).json(ctrainee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
  const { id } = req.params;

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

module.exports = {
  createCTrainee,
  getAllCTrainee,
  getCTrainee,
  deleteCTrainee,
  updateCTrainee,
};
