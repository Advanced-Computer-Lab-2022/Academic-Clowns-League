const express = require("express");
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
  getPopularCourses,
  adminAddDiscount
} = require("../controllers/courseController");

const router = express.Router();


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

//Get most popular courses
router.get("/getPopularCourses", getPopularCourses);

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
