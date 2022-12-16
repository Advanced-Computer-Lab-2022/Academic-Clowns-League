const express = require("express");
const { requireAuth } = require('../controllers/userController');
const {
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
} = require("../controllers/InstructorController");

const router = express.Router();



router.patch("/reviewInstructor",reviewInstructor);
router.patch("/editMyInstructorReview",editMyInstructorReview);
router.patch("/deleteMyInstructorReview",deleteMyInstructorReview);

//GET all  instructor
router.get("/", getAllInstructor);

//GET a single  instructor
router.get("/onlyone", getInstructor);

//POST a new  instructor
router.post("/", createInstructor);

//DELETE a instructor
router.delete("/:id", deleteInstructor);

//RATE an instructor
router.patch("/rate", rateInstructor);

router.patch("/", updateInstructor);

router.patch("/reset", resetPassword);

module.exports = router;
