const { Router } = require("express");

const pdfService = require("../service/pdf-service");

const express = require("express");
const { requireAuth } = require('../controllers/userController');
const {
  getAllCourses,
  getCourse,
  deleteCourse,
  updateCourse,
  rateCourse,
  createCourse,
  searchAllCourses,
  filterSubRatePrice,
  getInstCourses,
  filterInstPriceSub,
  searchInstrCourses,
  viewCorrectAnswer,
  addCourseExercise,
  addCourseSub,
  addCoursePreview,
  openMyCourse,
  moneyOwed,
  addNotes,
  printNotePDF,
  printCertificatePDF,
  sendCertificateMail,
  getPopularCourses,
  adminAddDiscount,
  reviewCourse,
  editMyCourseReview,
  deleteMyCourseReview
} = require("../controllers/courseController");

const router = express.Router();

//delete my course review
router.patch("/deleteMyCourseReview", deleteMyCourseReview);

//edit my course review
router.patch("/editMyCourseReview", editMyCourseReview);

//review a course
router.patch("/reviewCourse", reviewCourse);

//admin adding a discount
router.patch("/adminAddDiscount", adminAddDiscount);

//search all courses
router.get("/searchAllCourses", searchAllCourses);

//search in one instructor's courses
router.get("/searchInstrCourses", searchInstrCourses);

//GET all courses
router.get("/", getAllCourses);

//GET a single course   //the : means id is a route parameter
//router.get('/:id',getCourse)

//DELETE a single course
router.delete("/deletecourse", deleteCourse);

//UPDATE a single course
router.patch("/rate", rateCourse);
//add exercise to course on creation
router.patch("/addCourseEx", addCourseExercise);

//POST a new course
router.post("/", createCourse);

//filter courses by subject and/or rating and/or price
router.get("/filtersubrat", filterSubRatePrice);

//get instructor courses
router.get("/instcourses", getInstCourses);

router.get("/filterinstprice", filterInstPriceSub);

//view correct answer
router.get("/viewcorrectanswer", viewCorrectAnswer);

//add subtitle to course
router.patch("/addCourseSub", addCourseSub);

//add preview link to course
router.patch("/addCoursePreview", addCoursePreview);

//open my course
router.get("/openMyCourse", openMyCourse);

//moved this to the end so that "add course subtitle" doesn't map to it
//UPDATE a single course
router.patch("/", updateCourse);

router.get("/moneyOwed", moneyOwed);
router.patch("/addNotes", addNotes);

router.get("/printNotePDF", printNotePDF);

router.get("/printCertificatePDF", printCertificatePDF);

router.get("/sendCertificateMail", sendCertificateMail);
//Get most popular courses
router.get("/getPopularCourses", getPopularCourses);

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
