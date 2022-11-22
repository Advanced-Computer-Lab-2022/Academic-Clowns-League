const express = require("express");
const {
  getAllCourses,
  getCourse,
  deleteCourse,
  updateCourse,
  createCourse,
  searchAllCourses,
  filterSubRatePrice,
  getInstCourses,
  filterInstPriceSub,
  searchInstrCourses,
  addCourseSub,
  addCoursePreview,
  openMyCourse
} = require("../controllers/courseController");

const router = express.Router();

//search all courses
router.get("/searchAllCourses", searchAllCourses);

//search in one instructor's courses
router.get("/searchInstrCourses", searchInstrCourses);

//GET all courses
router.get("/", getAllCourses);

//GET a single course   //the : means id is a route parameter
//router.get('/:id',getCourse)

//DELETE a single course
router.delete("/:id", deleteCourse);

//UPDATE a single course
router.patch("/:id", updateCourse);

//POST a new course
router.post("/", createCourse);

//filter courses by subject and/or rating and/or price
router.get("/filtersubrat", filterSubRatePrice);

//get instructor courses
router.get("/instcourses", getInstCourses);

router.get("/filterinstprice", filterInstPriceSub);


//add subtitle to course
router.patch("/addCourseSub/:id", addCourseSub);

//add preview link to course
router.patch("/addCoursePreview/:id", addCoursePreview);

//open my course
router.get("/openMyCourse/:id", openMyCourse);


//after creating all our routes , export the router with the routes attached to it
module.exports = router;
