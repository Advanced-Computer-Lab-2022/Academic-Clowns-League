const express = require("express");
const {
  requireAuth,
  //updatePassword,
} = require("../controllers/userController");

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
  applyRefund,
  iTraineeUpdatePassword,
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
router.get("/registeredcourses", requireAuth, getRegisteredCourses);

//get grade for an exercise
router.get("/getgrade", requireAuth, getGrade);

//enter payment details and pay for course
router.post("/create-payment-intent", requireAuth, payForCourse);

//add course to courses array
router.patch("/registercourse", requireAuth, registerForCourse);

router.patch("/applyrefund", requireAuth, applyRefund);

router.patch("/iTraineeUpdatePassword", requireAuth, iTraineeUpdatePassword);

module.exports = router;
