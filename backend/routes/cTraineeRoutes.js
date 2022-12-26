const express = require('express');
const { requireAuth } = require('../controllers/userController');
const {
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

const router = express.Router();






router.get("/getCTraineeInfo",requireAuth, getCTraineeInfo);



//GET all corporate trainees
router.get('/',requireAuth,getAllCTrainee);

//GET a single corporate trainee
//router.get('/:id', getCTrainee);

//POST a new corporate trainee
router.post('/',requireAuth,createCTrainee);

//DELETE a corporate trainee
router.delete('/:id', deleteCTrainee);

//UPDATE a corporate trainee
router.patch('/',requireAuth, updateCTrainee);

//GET registered courses for CTrainee
router.get('/registeredcourses',requireAuth,getRegisteredCourses);

//get grade for an exercise
router.get('/getgrade',requireAuth, getGrade)

router.get('/getcourseinfo', requireAuth, getCourse);

module.exports = router;