const express = require("express");
const {
  getAllCourses,
  getCourse,
  deleteCourse,
  rateCourse,
  createCourse,
  searchAllCourses,
  filterSubRatePrice,
  getInstCourses,
  filterInstPriceSub,
  searchInstrCourses
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
router.patch("/rate", rateCourse);

//POST a new course
router.post("/", createCourse);

//filter courses by subject and/or rating and/or price
router.get("/filtersubrat", filterSubRatePrice);

//get instructor courses
router.get("/instcourses", getInstCourses);

router.get("/filterinstprice", filterInstPriceSub);

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
