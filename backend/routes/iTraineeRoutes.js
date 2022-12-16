const express = require("express");
const { requireAuth } = require('../controllers/userController');
const {
  createITrainee,
  getAllITrainee,
  getITrainee,
  deleteITrainee,
  updateITrainee,
  getRegisteredCourses,
  getGrade,
  payForCourse,
  registerForCourse,
  applyRefund
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
router.get('/registeredcourses',requireAuth ,getRegisteredCourses);

//get grade for an exercise
router.get('/getgrade', getGrade);

//enter payment details and pay for course
router.post('/create-payment-intent', payForCourse);

//add course to courses array
router.patch('/registercourse', registerForCourse);

router.patch('/applyrefund', applyRefund)

module.exports = router;
