const iTrainee = require("../models/iTraineeModel");

// create new iTrainee

const createITrainee = (req, res) => {
  res.json({ mssg: "POST a new individual Trainee" });
};

//UPDATE an individual trainee
const updateITrainee = (req, res) => {
  res.json({ mssg: "UPDATE an individual trainee" });
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

module.exports = {
  createITrainee,
  getAllITrainee,
  getITrainee,
  deleteITrainee,
  updateITrainee,
};
