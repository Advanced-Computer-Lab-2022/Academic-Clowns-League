const express = require("express");
const {
  getAllCourses,
  getCourse,
  deleteCourse,
  addCourseSub,
  createCourse,
  searchAllCourses,
  filterSubRatePrice,
  getInstCourses,
  filterInstPriceSub,
  searchInstrCourses,
  getCourseItems
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

//add subtitle to course on creation
router.patch("/addcoursesub", addCourseSub);

//POST a new course
router.post("/", createCourse);

//filter courses by subject and/or rating and/or price
router.get("/filtersubrat", filterSubRatePrice);

//get instructor courses
router.get("/instcourses", getInstCourses);

router.get("/filterinstprice", filterInstPriceSub);

//get items of specific course
router.get("/allcourseitems", getCourseItems);

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
