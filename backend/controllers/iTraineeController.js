const iTrainee = require("../models/iTraineeModel");
const mongoose = require("mongoose");
// create new iTrainee

const createITrainee = (req, res) => {
  res.json({ mssg: "POST a new individual Trainee" });
};

//UPDATE an individual trainee
const updateITrainee = async (req, res) => {
  const { id } = req.params;

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

module.exports = {
  createITrainee,
  getAllITrainee,
  getITrainee,
  deleteITrainee,
  updateITrainee,
};
