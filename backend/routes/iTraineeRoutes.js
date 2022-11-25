const express = require("express");
const {
  createITrainee,
  getAllITrainee,
  getITrainee,
  deleteITrainee,
  updateITrainee,
  getRegisteredCourses,
  //getGrade
} = require("../controllers/iTraineeController");

const router = express.Router();
//GET ALL INDIVIUAL TRAINEES
router.get("/", getAllITrainee);

//GET AN INDIVIDUAL TRAINEE
//router.get("/:id", getITrainee);

//POST AN INDIVIDUAL TRAINEE
router.post("/", createITrainee);

//DELETE AN INDIVIUAL TRAINEE
router.delete("/:id", deleteITrainee);

//UPDATE AN INDIVIDUAL TRAINEE
router.patch("/", updateITrainee);

//GET registered courses for ITrainee
router.get('/registeredcourses', getRegisteredCourses);

//get grade for an exercise
//router.get('/getgrade', getGrade)

module.exports = router;
