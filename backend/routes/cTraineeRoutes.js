const express = require("express");
const { requireAuth } = require("../controllers/userController");
const {
<<<<<<< HEAD
  createCTrainee,
  getAllCTrainee,
  //getCTrainee,
  deleteCTrainee,
  updateCTrainee,
  getRegisteredCourses,
  getGrade,
  resetPassword,
  cTraineeUpdatePassword,
} = require("../controllers/cTraineeController");
=======
    createCTrainee,
    getAllCTrainee,
    //getCTrainee,
    deleteCTrainee,
    updateCTrainee,
    getRegisteredCourses,
    getGrade,
    getCTraineeInfo,
    getCourse
} = require('../controllers/cTraineeController');
>>>>>>> main

const router = express.Router();






router.get("/getCTraineeInfo",requireAuth, getCTraineeInfo);



//GET all corporate trainees
router.get("/", requireAuth, getAllCTrainee);

//GET a single corporate trainee
//router.get('/:id', getCTrainee);

//POST a new corporate trainee
router.post("/", requireAuth, createCTrainee);

//DELETE a corporate trainee
router.delete("/:id", deleteCTrainee);

//UPDATE a corporate trainee
router.patch("/", requireAuth, updateCTrainee);

//GET registered courses for CTrainee
router.get("/registeredcourses", requireAuth, getRegisteredCourses);

//get grade for an exercise
router.get("/getgrade", requireAuth, getGrade);

<<<<<<< HEAD
router.patch("/cTraineeUpdatePassword", requireAuth, cTraineeUpdatePassword);

module.exports = router;
=======
router.get('/getcourseinfo', requireAuth, getCourse);

module.exports = router;
>>>>>>> main
