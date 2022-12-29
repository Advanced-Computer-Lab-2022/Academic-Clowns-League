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
  getMyNotes,
  printNotePDF,
  printCertificatePDF,
  sendCertificateMail,
  getPopularCourses,
  adminAddDiscount,
  reviewCourse,
  editMyCourseReview,
  deleteMyCourseReview,
  addToProgress,
  getMyProgress,
  getMyCourseReview,
  getCourseLength,
  getInstPub,
  getInstUnpub,
  publishCourse,
  closeCourse,
  getCourseInfo
} = require("../controllers/courseController");

const router = express.Router();



//get my course review
router.get("/getMyCourseReview",requireAuth, getMyCourseReview);

//get my progress
router.get("/getMyProgress",requireAuth, getMyProgress);

//add to progress
router.get("/addToProgress",requireAuth, addToProgress);


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
router.delete("/deletecourse", requireAuth, deleteCourse);

//UPDATE a single course
router.patch("/rate",requireAuth,rateCourse);
//add exercise to course on creation
router.patch("/addCourseEx",requireAuth,addCourseExercise);

//POST a new course
router.post("/",requireAuth, createCourse);

//filter courses by subject and/or rating and/or price
router.get("/filtersubrat",filterSubRatePrice); //guest can access it

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
router.get("/getMyNotes",requireAuth,getMyNotes);



router.get("/printNotePDF", requireAuth,printNotePDF);

router.get("/printCertificatePDF",requireAuth,printCertificatePDF);

router.get("/sendCertificateMail", requireAuth, sendCertificateMail);
//Get most popular courses
router.get("/getPopularCourses",getPopularCourses); //guest can access it

router.get("/getCourseLength",getCourseLength);

router.get('/getInstPub', requireAuth, getInstPub);

router.get('/getInstUnpub', requireAuth, getInstUnpub);

router.patch('/publishCourse', requireAuth, publishCourse);

router.patch('/closeCourse', requireAuth, closeCourse);

router.get('/getCourse', requireAuth, getCourse);

router.get('/getCourseInfo', requireAuth, getCourseInfo);

//after creating all our routes , export the router with the routes attached to it
module.exports = router;
