const express = require("express");
const {
  createInstructor,
  getAllInstructor,
  getInstructor,
  deleteInstructor,
  rateInstructor,
  updateInstructor,
  resetPassword,
} = require("../controllers/InstructorController");

const router = express.Router();

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
