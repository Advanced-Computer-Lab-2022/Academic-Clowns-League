const { Router } = require("express");

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
router.patch("/deleteMyCourseReview",requireAuth,deleteMyCourseReview);

//edit my course review
router.patch("/editMyCourseReview",requireAuth,editMyCourseReview);

//review a course
router.patch("/reviewCourse",requireAuth,reviewCourse);

//admin adding a discount
router.patch("/adminAddDiscount",requireAuth,adminAddDiscount);

//search all courses
router.get("/searchAllCourses", searchAllCourses);

//search in one instructor's courses
router.get("/searchInstrCourses", requireAuth, searchInstrCourses);

//GET all courses
router.get("/", getAllCourses); //Guest

//GET a single course   //the : means id is a route parameter
//router.get('/:id',getCourse)

//DELETE a single course
router.delete("/deletecourse", deleteCourse);

//UPDATE a single course
router.patch("/rate",requireAuth,rateCourse);
//add exercise to course on creation
router.patch("/addCourseEx",requireAuth,addCourseExercise);

//POST a new course
router.post("/",requireAuth, createCourse);

//filter courses by subject and/or rating and/or price
router.get("/filtersubrat",requireAuth,filterSubRatePrice); //guest

//get instructor courses
router.get("/instcourses",requireAuth,getInstCourses);

router.get("/filterinstprice",requireAuth, filterInstPriceSub);

//view correct answer
router.get("/viewcorrectanswer",requireAuth,viewCorrectAnswer);

//add subtitle to course
router.patch("/addCourseSub",requireAuth,addCourseSub);

//add preview link to course
router.patch("/addCoursePreview",requireAuth, addCoursePreview);

//open my course
router.get("/openMyCourse",requireAuth, openMyCourse);

//moved this to the end so that "add course subtitle" doesn't map to it
//UPDATE a single course
router.patch("/",requireAuth,updateCourse);

router.get("/moneyOwed",requireAuth,moneyOwed);
router.patch("/addNotes",requireAuth,addNotes);

router.get("/printNotePDF", requireAuth,printNotePDF);

router.get("/printCertificatePDF",requireAuth,printCertificatePDF);

router.get("/sendCertificateMail",requireAuth,sendCertificateMail);
//Get most popular courses
router.get("/getPopularCourses",requireAuth,getPopularCourses);

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
