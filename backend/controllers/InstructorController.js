const Instructor = require("../models/InstructorModel");

// create new Instructor

const createInstructor = (req, res) => {
  res.json({ mssg: "POST a new individual Instructor" });
};

//UPDATE an individual Instructor
const updateInstructor = (req, res) => {
  res.json({ mssg: "UPDATE an individual Instructor" });
};

//DELETE an individual Instructor
const deleteInstructor = (req, res) => {
  res.json({ mssg: "DELETE an individual Instructor" });
};

//GET a single individual Instructor
const getInstructor = (req, res) => {
  res.json({ mssg: "GET a single individual Instructor" });
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
  updateInstructor,
};
