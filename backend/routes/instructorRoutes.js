const express = require("express");
const { requireAuth } = require("../controllers/userController");
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
  deleteMyInstructorReview,
<<<<<<< HEAD
  updatePassword,
=======
  getMyInstReview
>>>>>>> main
} = require("../controllers/InstructorController");

const router = express.Router();

<<<<<<< HEAD
router.patch("/reviewInstructor", requireAuth, reviewInstructor);
router.patch("/editMyInstructorReview", requireAuth, editMyInstructorReview);
router.patch(
  "/deleteMyInstructorReview",
  requireAuth,
  deleteMyInstructorReview
);
=======



//get my instructor review
router.get("/getMyInstReview",requireAuth, getMyInstReview);

router.patch("/reviewInstructor",requireAuth,reviewInstructor);
router.patch("/editMyInstructorReview",requireAuth,editMyInstructorReview);
router.patch("/deleteMyInstructorReview",requireAuth,deleteMyInstructorReview);
>>>>>>> main

//GET all  instructor
router.get("/", requireAuth, getAllInstructor);

//GET a single  instructor
router.get("/onlyone", requireAuth, getInstructor);

//POST a new  instructor
router.post("/", requireAuth, createInstructor);

//DELETE a instructor
router.delete("/:id", requireAuth, deleteInstructor);

//RATE an instructor
router.patch("/rate", requireAuth, rateInstructor);

router.patch("/", requireAuth, updateInstructor);

router.patch("/updatePassword", requireAuth, updatePassword);

module.exports = router;
